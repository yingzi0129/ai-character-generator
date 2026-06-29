export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    
    // Serve static files directly from KV
    if (path.startsWith('/_next/')) {
      const filePath = path.slice(1);
      
      if (env.__STATIC_CONTENT) {
        const value = await env.__STATIC_CONTENT.get(filePath, { type: 'text' });
        if (value) {
          let contentType = 'application/octet-stream';
          if (filePath.endsWith('.css')) {
            contentType = 'text/css; charset=utf-8';
          } else if (filePath.endsWith('.js')) {
            contentType = 'application/javascript; charset=utf-8';
          } else if (filePath.endsWith('.svg')) {
            contentType = 'image/svg+xml';
          } else if (filePath.endsWith('.png')) {
            contentType = 'image/png';
          } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
            contentType = 'image/jpeg';
          } else if (filePath.endsWith('.ico')) {
            contentType = 'image/x-icon';
          } else if (filePath.endsWith('.woff2')) {
            contentType = 'font/woff2';
          }
          
          return new Response(value, {
            status: 200,
            headers: {
              'Content-Type': contentType,
              'Cache-Control': 'public, max-age=31536000, immutable'
            }
          });
        }
      }
      
      return new Response('Static file not found: ' + filePath, { status: 404 });
    }
    
    // Map routes to HTML files
    let htmlFile;
    if (path === '/' || path === '/index.html') {
      htmlFile = 'index.html';
    } else if (path === '/pricing' || path === '/pricing.html') {
      htmlFile = 'pricing.html';
    } else if (path === '/examples' || path === '/examples.html') {
      htmlFile = 'examples.html';
    } else if (path === '/blog' || path === '/blog.html') {
      htmlFile = 'blog.html';
    } else if (path === '/about' || path === '/about.html') {
      htmlFile = 'about.html';
    } else if (path.startsWith('/blog/')) {
      // Handle blog post pages
      const slug = path.replace('/blog/', '').replace('.html', '');
      htmlFile = `blog/${slug}.html`;
    } else {
      htmlFile = '404.html';
    }
    
    try {
      if (env.__STATIC_CONTENT) {
        const value = await env.__STATIC_CONTENT.get(htmlFile, { type: 'text' });
        
        if (value) {
          return new Response(value, {
            status: htmlFile === '404.html' ? 404 : 200,
            headers: {
              'Content-Type': 'text/html; charset=utf-8',
              'Cache-Control': 'public, max-age=3600'
            }
          });
        }
      }
      
      return new Response('Not Found: ' + htmlFile, { status: 404 });
    } catch (error) {
      return new Response(`Error: ${error.message}`, { status: 500 });
    }
  }
};