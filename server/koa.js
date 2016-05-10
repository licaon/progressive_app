import koa from 'koa';
import koaRouter from 'koa-router';
import serve from 'koa-static-folder';
import { RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';
import React from 'react';
import routes from '../app/routes';
import fs from 'fs';

const app = koa();
const router = koaRouter();
const port = process.env.PORT || (process.env.NODE_ENV === 'development' ? 3030 : 8080);
const host = process.env.HOST || (process.env.NODE_ENV === 'development' ? 'localhost' : '0.0.0.0');

const photos = JSON.parse(fs.readFileSync('server/dummy/photos.json', 'utf8'));
const comments = JSON.parse(fs.readFileSync('server/dummy/comments.json', 'utf8'));

try {
  // Query the entry
  const stats = fs.lstatSync('./dist');

  // Is it a directory?
  if (stats.isDirectory()) {
    app.use(serve('./dist'));
  }
} catch (e) {
  // ...
}

router
  .get('/api/photos',
  function *() {
    this.body = photos;
  })
  .get('/api/comments', function *() {
    this.body = comments;
  });

app
  .use(router.routes());

// Start as an universal app
if (process.env.type === 'universal') {
  app.use(function *() {
    match({ routes, location: this.req.url }, (error, redirectLocation, renderProps) => {
      this.response.body = `
      <html>
        <head>
          <title>Example Koa + React-Router App</title>
        </head>
        <body>
          <div id="root">${renderToString(<RouterContext {...renderProps} />)}</div>
        </body>
      </html>`;
    });
  });
}

app.listen(port, host, () => {
  console.log(`Koa is listening on ${host}:${port}`);
});
