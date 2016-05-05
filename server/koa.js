import koa from 'koa';
import serve from 'koa-static-folder';
import { RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';
import React from 'react';
import routes from '../app/routes';
import fs from 'fs';

const app = koa();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

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

app.listen(port, host, () => {
  console.log(`Koa is listening on ${host}:${port}`);
});
