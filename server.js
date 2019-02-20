const { createServer } = require('http');
const { parse } = require('url');
const { createReadStream } = require('fs');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname === '/sw.js') {
      res.setHeader('content-type', 'text/javascript');
      createReadStream('./offline/serviceWorker.js').pipe(res);
    } else if (pathname === '/robots.txt') {
      res.setHeader('content-type', 'text/plain');
      createReadStream('./robots.txt').pipe(res);
    } else if (pathname === '/sitemap.xml') {
      res.setHeader('content-type', 'application/xml');
      createReadStream('./sitemap.xml').pipe(res);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port, err => {
    if (err) throw err;
  });
});
