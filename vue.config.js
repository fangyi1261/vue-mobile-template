// vue.config.js 配置文件
const path = require('path');

module.exports = {
  publicPath: './',
  outputDir: 'build',
  lintOnSave: false, // 编译时eslint校验
  runtimeCompiler: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '移动端开发模版',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  productionSourceMap: false,
  parallel: require('os').cpus().length > 1,
  pwa: {},
  devServer: {
    open: true,
    host: 'localhost',
    port: '8081',
    https: false,
    hot: true
    // proxy: {
    //   '/api': {
    //     target: '',
    //     ws: true,
    //     changOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  pluginOptions: {},
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, './src'))
      .set('@a', path.resolve(__dirname, './src/assets'))
      .set('@c', path.resolve(__dirname, './src/components'))
      .set('@p', path.resolve(__dirname, './src/pages'));


    if (process.env.NODE_ENV === 'production') {
      config.output.filename('static/js/[name].js').end();
      config.output.chunkFilename('static/js/[name].js').end();
      config.plugin('extract-css').tap(() => [{
        filename: 'static/css/[name].css',
        chunkFilename: 'static/css/[name].css'
      }]);
    }
  },

  // eslint-disable-next-line no-unused-vars
  configureWebpack: config => {
    // console.log(config);
    return {
      externals: { // key 是from的库名  value 是实际使用的名称
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios'
      }
    };
  },
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      css: {

      },
      postcss: {
        plugins: [
          require('postcss-px2rem-exclude')({
            remUnit: 75,
            unitPrecision: 2,
            minPixelValue: 2,
            exclude: /node_modules/i
          })
        ]
      },
      stylus: {
        'resolve url': true
      }
    }
  }
};
