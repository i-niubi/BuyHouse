<template>
 <div>
   <div class="banner">
     <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="img in bannerimg" :key="img.ad_id" class="imgbox">
        <img :src="img.adpicture">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
     </swiper>
   </div>
   <div class="search">
     <p @click="searchhouse">
       <span class="icon-sousuo iconfont"></span>
       <input type="text" placeholder="搜索您想买房的城市">
     </p>
   </div>
 </div>
</template>
<script>
import Swiper from "swiper"
import {mapState} from "vuex"
import 'swiper/dist/css/swiper.css'
export default {
 name:"homeswiper",
 data(){
  return {
    swiperOption: {
      autoplay:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    }
  }
 },
 computed:{
  ...mapState(["bannerimg"])
 },
 methods:{
   searchhouse(){
    this.$router.push({path:"searchhouse"})
   }
 }
}
</script>
<style scoped>
.banner{
  width: 100%;
}
.banner .imgbox img{
  width: 100%;
  margin: 0 auto;
}
.imgbox{
  width: 100%!important;
  margin-right: 0;
}
.search{
  position: relative;
  height: 50px;
  width: 100%;
  top: -20px;
  z-index:2;
}
.search p{
  width:280px;
  height: 50px;
  background: #fff;
  z-index: 1;
  border-radius: 5px;
  box-shadow: 1px 3px 5px #ccc;
  line-height: 50px;
  margin: 0 auto;
  text-align: left
}
.search p span{
  font-size: 20px;
  font-weight: 800;
  color: #d8d8d8;
  display: inline-block;
  margin: 0 15px;
}
.search p input{
  color: #999;
  font-size: 16px;
  outline: none;
}
.search p input{
  border: 0
}
.swiper-container-horizontal>.swiper-pagination-bullets{
  bottom: 50px !important;
}
.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
  margin: 0 10px !important;
}
.swiper-pagination-bullet-active{
  background: red !important;
  width: 12px !important;
}
</style>
