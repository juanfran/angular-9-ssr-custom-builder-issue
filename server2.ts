/* tslint:disable */
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
// import 'isomorphic-fetch';

import { AppServerModule } from './src/main.server';

import { enableProdMode } from '@angular/core';
import { renderModuleFactory, renderModule } from '@angular/platform-server';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

(global as any)['URL'] = require('url').URL; // use by embed-video

const x = function(document: any, url: string, cookie: any) {
  const crossPlatfromMessages: any = {};

  console.log(AppServerModule);

  return renderModule(AppServerModule, {
    url,
    document,
    extraProviders: [
      {
        provide: 'RENDER_CP',
        useValue: crossPlatfromMessages
      },
      {
        provide: 'COOKIE',
        useValue: cookie
      }
    ]
  })
  .then((html) => {
    return {
      html,
      status: crossPlatfromMessages['status']
    };
  });
}

const index = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>MyDreamApp</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
`;


function run() {
  const result = x(index,  'http://localhost:4001/', null);

  return result.then((r) => {
    console.log(r);
  });
}

run();
