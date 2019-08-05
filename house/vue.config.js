module.exports={
 devServer:{
  proxy:{
  //  "/api":{
  //   target:"https://m.uhouzz.com/index.php/bservice/HouseSaleSearchFilter",
  //   // changeOrigin: true
  //   secure:false 
  //  },
  //  '/api': {
  //   target: 'https://m.uhouzz.com/index.php/bservice',
  //   pathRewrite: {
  //   //如果改变了api 路径，可以加上这个配置，重写路径
  //     '^/api': ''
  //   },
  //   secure:false 
  //   // 可以访问https服务器
  //   },

    '/api': {
        target: 'https://m.uhouzz.com/index.php/bservice', // target host
        changeOrigin: true, // needed for virtual hosted sites
        ws: true, // proxy websockets
        pathRewrite: {
          '^/api': '', // rewrite path
        },
        secure:false
    }
  }
 }
}