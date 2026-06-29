import manifestJSON from "__STATIC_CONTENT_MANIFEST";
import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

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

export default {
  async fetch(request, env, ctx) {
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
  },
};
