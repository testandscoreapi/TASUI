
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/TASUI/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/TASUI"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5439, hash: '8aee767e87263e6fa06e0c3da6bd90ee549464d2db46efcb634446a2c6b048e3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1062, hash: 'c77728fbbd2c602a95cfdf8026ac730a5e36a4146d43fd6f2b044b99278fd823', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 218904, hash: '0012b6f49bef1a434d6639d08ae3eb9636ce7b528971e8b94a4dc4492a720c23', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AUEI2AVF.css': {size: 227079, hash: 'wy2ZAfCdBKo', text: () => import('./assets-chunks/styles-AUEI2AVF_css.mjs').then(m => m.default)}
  },
};
