<template>
 <div>
  <div class="homerecommend">
    <h3>{{ homedata[4].title }}</h3>
    <swiper :options="swiperOption" ref="mySwiper">
     <!-- slides -->
     <swiper-slide class="msg" v-for="img in homedata[4].list" :key="img.roi">
      <img :src="img.thumburl">
      <div class="roi">
       <span>{{ msg }}</span>
       <b>{{ img.roi }}%</b>
      </div>
      <div class="information">
       <p>
        <span>{{ img.chinesecity }}</span>
        <b></b>
        <span>{{ img.title }}</span>
       </p>
       <span>{{ img.price_rmb_string }}</span>
       <div class="rent">{{ img.rent }}</div>
       <div class="housetag">
        <span v-for="tag,i in img.housetag" :key="i" :style="{backgroundColor:tag.tag_color}">
         {{ tag.tagname }}
        </span>
       </div>
      </div>  
     </swiper-slide>
    </swiper>
  </div>
 </div>
</template>
<script>
import Swiper from "swiper"
import {mapState} from "vuex"
import 'swiper/dist/css/swiper.css'
export default {
 data(){
  return {
   msg:"近一年涨幅",
   swiperOption: {
    slidesPerView: 1.21,
   }  
  }
 },
 computed:{
  ...mapState(["homedata"])
 },
 mounted(){ }
}
</script>
<style scoped>
.homerecommend{
 padding-left:22px; 
}
.homerecommend>h3{
 color: #313131;
 font-size: 18px;
 text-align: left;
 margin: 40px 0 20px;
}
.msg{
 width: 80% !important;
 margin-right: 10px !important;
 position: relative;
}
.msg img{
 width: 100%;
 height:160px;
}
.roi{
 position: absolute;
 left: 10px;
 top: 126px;
 color: #fff;
 height: 24px;
 font-size: 14px;
 text-align: center;

 line-height: 24px;
}
.roi span{
 display: inline-block;
 background: #313131;
 width: 80px;
 height: 100%;
}
.roi b{
 display: inline-block;
 width: 44px;
 background: #ff5a5f;
 height: 100%;
}
.information{
 width: 100%;
 text-align: left;
}
.information p{
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 margin-top: 6px;
}
.information p span{
 color: #313131;
 font-size: 16px;
 display: inline-block;
}
.information p b{
 display: inline-block;
 margin:0 6px;
 width: 1px;
 height: 18px;
 background: #d3d3d3;
 vertical-align: bottom;
}
.information>span{
 color: #ff5a5f;
 font-size: 20px;
 display: inline-block;
 margin: 4px 0
}
.information .rent{
 font-size: 14px;
 color: #666;
}
.housetag{
 width: 100%;
 margin-top: 10px;
}
.housetag span{
 width: 30%;
 height: 24px;
 color: #fff;
 font-size: 14px;
 text-align: center;
 border-radius: 3px;
 line-height: 24px;
 display: inline-block;
 margin-right: 7px;
 margin-bottom: 4px;
}
</style>
