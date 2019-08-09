<template>
 <div>
  <div class="title">
   <i class="iconfont icon-jiantou3" @click="backhome"></i>
   <span>精选好房</span>
  </div>
  <div class="banner">
   <img src="https://pic.uhouzz.com/eventImages/a9/27c37c2d230ddcbb9a8b4503283e07f40ce46c.jpg">   
   <h3>投资好房</h3>
   <p>甄选全球回报率高的房源</p>
  </div>
  <getHotHousedetaile/>
 </div>
</template>
<script> 
import getHotHousedetaile from "../components/getHotHousedetaile"
export default {
 components:{
  getHotHousedetaile
 },
 methods:{
  backhome(){
   this.$router.push({path:"/home"})
  },
 }
}
</script>
<style scoped>
.title{
 width: 100%;
 height: 50px;
 line-height: 50px;
 padding-left: 16px;
 box-sizing: border-box
}
.title span{
 color: #000;
 font-size: 16px;
 display: inline-block;
 margin-left: 100px;
}
.title i{
 font-size: 14px;
 color: #9e9e9e;
}
.banner{
 width: 100%;
 color: #fff;
 position: relative;
}
.banner img{
 width: 100%;
 margin: 0 auto;
 display: block
}
.banner h3,.banner p{
 position: absolute;
 text-align: center;
 width:100%;
}
.banner h3{
 font-size: 24px;
 bottom: 50px;
 font-weight: 800
}
.banner p{
 font-size: 14px;
 bottom: 30px;
}
</style>
