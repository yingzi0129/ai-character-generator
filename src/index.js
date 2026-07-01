import manifestJSON from "__STATIC_CONTENT_MANIFEST";
import { getAssetFromKV } from "@cloudflare/kv-asset-handler";
import { SignJWT, jwtVerify } from "jose";

const assetManifest = JSON.parse(manifestJSON);

const routeMap = new Map([
  ["/", "/index.html"],
  ["/pricing", "/pricing.html"],
  ["/examples", "/examples.html"],
  ["/blog", "/blog.html"],
  ["/about", "/about.html"],
  ["/blog/how-to-create-consistent-ai-characters", "/blog/how-to-create-consistent-ai-characters.html"],
  ["/blog/mastering-style-transfer", "/blog/mastering-style-transfer.html"],
  ["/blog/10-prompt-engineering-tips", "/blog/10-prompt-engineering-tips.html"],
]);

function requestForAsset(request) {
  const url = new URL(request.url);
  const mappedPath = routeMap.get(url.pathname) || url.pathname;

  if (mappedPath !== url.pathname) {
    url.pathname = mappedPath;
    return new Request(url.toString(), request);
  }

  return request;
}

function getCookieValue(headers, name) {
  const cookie = headers.get("Cookie") || "";
  const match = cookie.match(new RegExp(`(^|;\\s*)${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name, value, maxAge = 0) {
  const secure = value ? "Secure; " : "";
  return `${name}=${value ? encodeURIComponent(value) : ""}; Path=/; ${secure}HttpOnly; SameSite=Lax; Max-Age=${maxAge}`;
}

async function createSessionToken(user, secret) {
  const encoder = new TextEncoder();
  return await new SignJWT({ sub: user.id, email: user.email, name: user.name, avatar: user.avatar })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encoder.encode(secret));
}

async function verifySessionToken(token, secret) {
  try {
    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(token, encoder.encode(secret));
    return payload;
  } catch {
    return null;
  }
}

async function getUserByGoogleId(db, googleId) {
  const result = await db.prepare("SELECT * FROM users WHERE google_id = ?").bind(googleId).first();
  return result;
}

async function createUser(db, { id, email, name, avatar, googleId }) {
  await db
    .prepare(
      "INSERT INTO users (id, email, name, avatar, google_id) VALUES (?, ?, ?, ?, ?)"
    )
    .bind(id, email, name, avatar, googleId)
    .run();
}

function generateId() {
  return crypto.randomUUID();
}

async function handleGoogleAuth(request, env) {
  const redirectUri = `${new URL(request.url).origin}/api/auth/callback/google`;
  const state = crypto.randomUUID();
  const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  url.searchParams.set("client_id", env.GOOGLE_CLIENT_ID);
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", "openid email profile");
  url.searchParams.set("state", state);
  url.searchParams.set("prompt", "select_account");

  return new Response(null, {
    status: 302,
    headers: {
      Location: url.toString(),
      "Set-Cookie": setCookie("oauth_state", state, 600),
    },
  });
}

async function handleGoogleCallback(request, env) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const savedState = getCookieValue(request.headers, "oauth_state");
  const origin = `${url.origin}`;
  const redirectUri = `${origin}/api/auth/callback/google`;

  if (!code || !state || state !== savedState) {
    return new Response("Invalid OAuth state", { status: 400 });
  }

  // Exchange code for tokens
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    }),
  });

  if (!tokenResponse.ok) {
    const errorText = await tokenResponse.text();
    console.error("[google callback] token exchange failed:", tokenResponse.status, errorText);
    return new Response(`Failed to exchange OAuth code: ${tokenResponse.status}`, { status: 400 });
  }

  const tokenData = await tokenResponse.json();
  const idToken = tokenData.id_token;
  if (!idToken) {
    console.error("[google callback] missing id_token:", tokenData);
    return new Response("Missing id_token", { status: 400 });
  }

  // Parse JWT payload (Google ID token is a JWT) with correct UTF-8 handling
  function base64UrlDecode(str) {
    const padding = (4 - (str.length % 4)) % 4;
    str += "=".repeat(padding);
    str = str.replace(/\-/g, "+").replace(/\_/g, "/");
    const raw = atob(str);
    const bytes = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) {
      bytes[i] = raw.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  }

  const [_, payloadB64] = idToken.split(".");
  const claims = JSON.parse(base64UrlDecode(payloadB64));
  const googleId = claims.sub;
  const email = claims.email;
  const name = claims.name || claims.given_name || "";
  const avatar = claims.picture || "";

  if (!email || !googleId) {
    return new Response("Invalid Google profile", { status: 400 });
  }

  let user = await getUserByGoogleId(env.DB, googleId);
  if (!user) {
    const id = generateId();
    await createUser(env.DB, { id, email, name, avatar, googleId });
    user = { id, email, name, avatar, google_id: googleId };
  }

  const sessionToken = await createSessionToken(user, env.SESSION_SECRET);

  const headers = new Headers();
  headers.set("Location", "/");
  headers.append("Set-Cookie", setCookie("session", sessionToken, 60 * 60 * 24 * 7));
  headers.append("Set-Cookie", setCookie("oauth_state", "", 0));

  return new Response(null, {
    status: 302,
    headers,
  });
}

async function handleMe(request, env) {
  const token = getCookieValue(request.headers, "session");
  console.log("[auth/me] cookie session:", token ? "present" : "missing");
  if (!token) {
    return new Response(JSON.stringify({ loggedIn: false }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const payload = await verifySessionToken(token, env.SESSION_SECRET);
  console.log("[auth/me] payload:", payload);
  if (!payload) {
    return new Response(JSON.stringify({ loggedIn: false }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(
    JSON.stringify({
      loggedIn: true,
      user: {
        id: payload.sub,
        email: payload.email,
        name: payload.name,
        avatar: payload.avatar,
      },
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

async function handleLogout(request, env) {
  return new Response(JSON.stringify({ loggedIn: false }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": setCookie("session", "", 0),
    },
  });
}

async function serveStatic(request, env, ctx) {
  try {
    return await getAssetFromKV(
      {
        request,
        waitUntil(promise) {
          return ctx.waitUntil(promise);
        },
      },
      {
        ASSET_NAMESPACE: env.__STATIC_CONTENT,
        ASSET_MANIFEST: assetManifest,
        mapRequestToAsset: requestForAsset,
      }
    );
  } catch (error) {
    return new Response("Not Found", { status: 404 });
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Auth API routes
    if (url.pathname === "/api/auth/google") {
      return handleGoogleAuth(request, env);
    }
    if (url.pathname === "/api/auth/callback/google") {
      return handleGoogleCallback(request, env);
    }
    if (url.pathname === "/api/auth/me") {
      return handleMe(request, env);
    }
    if (url.pathname === "/api/auth/logout") {
      return handleLogout(request, env);
    }

    // Default: serve static assets
    return serveStatic(request, env, ctx);
  },
};
