module.exports={
 devServer:{
  proxy:{
   "/ajax":{
    target:"https://m.uhouzz.com/index.php",
    changeOrigin: true
   },
   '/api': {
    target: 'http://m.uhouzz.com/index.php/',
    pathRewrite: {
    //如果改变了api 路径，可以加上这个配置，重写路径
      '^/api': ''
    },
    secure:false 
    // 可以访问https服务器
    },
  }
 }
}