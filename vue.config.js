module.exports={
  baseUrl: process.env.NODE_ENV === 'production'? './'  : '/',
  devServer: {
    open: 'Chrome',
    host:'127.0.0.1',
    port:9090,
    proxy: {
      '/local': {
          target: 'http://127.0.0.1:9090/static',  // 本地服务
          ws: true,
          changeOrigin: true
        },
        '/api': {
          target: 'http://192.168.162.75:8060'   //  外部代理服务器
        }
    },
  },
  // css:{
  //   loaderOptions: {
  //     css: {
  //       data: `@import "node_modules/iview/dist/styles/iview.css";`
  //     }
  //   },
  //   // modules:true    //  css modules模块
  // },
  productionSourceMap:false  //  如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
}
