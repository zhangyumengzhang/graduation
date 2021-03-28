module.exports = {
  devServer: {
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://localhost:8900', // 目标地址
        ws: true,
        changeOrigin: true, // 这里true表示实现跨域
        pathRewrite: {
          '^/api': '' // 这里理解成用‘/api’代替target里面的地址，后面组件中我们调接口时直接用api代替
        }
      }
    }
  },
  configureWebpack: { externals: 'hls.js' } // 在这配置webpack的externals这个字段
}
