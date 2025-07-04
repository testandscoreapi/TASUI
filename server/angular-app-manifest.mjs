
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5433, hash: '4c1cc757ab044015634f23c83089271ca0e4cb42d967d5832236cff39cdab647', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1056, hash: '55f2cab6e96f51b79e24914d280da621115770a7dcd537eecc424a2cd0d24fd5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 218898, hash: '2f7a43c1f0d09e9aa03e22a77f7fa8b7085140188983baf929b50e9ba656e06b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AUEI2AVF.css': {size: 227079, hash: 'wy2ZAfCdBKo', text: () => import('./assets-chunks/styles-AUEI2AVF_css.mjs').then(m => m.default)}
  },
};
