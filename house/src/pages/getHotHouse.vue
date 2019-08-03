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
  <div class="citylist">
   <div class="cityname" :style="{height:height}">
    <router-link to="/getHotHouse/getHotHousedetaile" v-for="city,i in HotHouse" :key="i">
     {{ city.title }}
    </router-link>
   </div>
   <i @click="open" class="iconfont icon-zelvxuanzefeiyongdaosanjiaoxingfandui"></i>
  </div>
  <router-view></router-view>
 </div>
</template>
<script> 
import axios from "axios"
import {mapState, mapActions} from "vuex"
export default {
 data(){
  return {
   height:"42px"
  }
 },
 mounted(){
  this.getHotHouse()
 },
 computed:{
  ...mapState(["HotHouse"]),
 },
 methods:{
  backhome(){
   this.$router.push({path:"/home"})
  },
  ...mapActions(["getHotHouse"]),
  open(){
   if(this.height=="42px"){
    this.height="auto"
   }else{
    this.height="42px"
   }
  },
 },
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
.citylist{
 height: auto;
 width: 100%;
 position: relative;
 border-bottom:1px solid #e8e8e8
}
.cityname{
 width: 88%;
 overflow: hidden;
}
a{
 color: #000;
 font-size: 16px;
 display: inline-block;
 margin:0 12px;
 height: 42px;
 line-height: 42px;
}
.citylist i{
 position: absolute;
 top: 12px;
 right: 16px;
}
</style>
