exports.config = {
  bundles: [
    { components: ['awesome-modal'] },
    { components: ['awesome-backdrop']}
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
