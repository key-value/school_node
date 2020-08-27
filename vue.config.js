module.exports = {
  productionSourceMap: process.env.NODE_ENV !== 'production',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].chunksSortMode = 'none';
      return args; /*  */
    });
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 18081,
    https: false,
    hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: {
      '/api': {
        target: 'http://sl.lanye.me:18080/',
        changeOrigin: true,
        // logLevel: 'debug',
      },
    },
  },
};