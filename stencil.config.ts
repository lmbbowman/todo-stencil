import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'todoapp',
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  buildEs5: true,
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null,  // disable service workers
    }
  ],
};
