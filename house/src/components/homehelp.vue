<template>
 <div class="buyhelp">
  <div class="buyhelp-left">
   <img :src="img">
   <div>
    <p>
     买房小助手
     <b>热门</b>
    </p>
    <span>海外置业就找我吧</span>
   </div>
  </div>
  <div class="buyhelp-right">
   <p>房贷计算器
    <b>免费</b>
   </p>  
  </div>
 </div>
</template>
<script>
export default {
 data(){
  return {
   img:"https://pcpic.uhouzz.com/webappsaleonline/images/c49f2dfdba283496e01623e229b0d4aa.png"
  }
 }
}
</script>
<style scoped>
.buyhelp{
 width: 100%;
 padding:0 22px;
 height: 80px;
 display: flex;
 box-sizing: border-box;
}
.buyhelp-left{
 width: 66%;
 margin-right: 10px;
 text-align: left;
 background: #f7f7f7;
 padding-top: 15px;
 box-sizing: border-box;
}
.buyhelp-left img{
 width: 64px;
 height: 64px;
}
.buyhelp-left>div{
 display: inline-block;
 position: relative;
 top:-20px;
}
.buyhelp p{
 color:#313131 ;
 font-size: 16px;
}
.buyhelp b{
 color: #fff;
 font-size: 12px;
 display: inline-block;
 position: absolute;
 width:30px;
 height: 16px;
 top:-6px;
 text-align: center;
 line-height: 16px;
 border-radius: 10px 10px 10px 0;
}
.buyhelp-left>div p b{
 background: #fca646;
}
.buyhelp-left>div span{
 color: #999;
 font-size: 12px;
}
.buyhelp-right{
 width: 34%;
 height: 80px;
 background: #f7f7f7;
 position: relative;
 box-sizing: border-box;
 line-height: 80px;
}
.buyhelp-right p{
 position: relative;
}
.buyhelp-right p b{
 background: #49b78a;
 top:14px;
 right: 10px;
}
</style>
