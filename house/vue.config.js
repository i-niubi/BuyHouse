module.exports={
 devServer:{
  proxy:{
   "/ajax":{
    target:"https://m.uhouzz.com/index.php",
    changeOrigin: true
   }
  }
 }
}