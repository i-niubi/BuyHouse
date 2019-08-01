<template>
 <div>
  <div class="homehot">
   <h3>{{ homedata[1].title }}</h3>
   <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="img in homedata[1].list" :key="img.id" class="city">
     <img :src="img.img_url">
     <div class="cityname">
      <h4>{{ img.chinesecountry }}</h4>
      <p>{{ img.englishcountry }}</p>
     </div>
    </swiper-slide>
    <!-- Optional controls -->
  </swiper>
   <div class="citylist">
    <span v-for="name in homedata[2].list" :key="name.rid">{{ name.chinesecity }}</span>
   </div>
  </div>
 </div>
</template>

<script>
import Swiper from "swiper"
import {mapState} from "vuex"
import 'swiper/dist/css/swiper.css'
export default {
 name: 'carrousel',
 data(){
  return {
   swiperOption: {
    slidesPerView: 2.2
   }
  }
 },
 computed:{
  ...mapState(["homedata"])
 }
}
</script>

<style scoped>
.homehot{
 padding-left: 22px;
 margin-top: 30px
}
.homehot h3{
 text-align: left;
 font-size: 18px;
 color: #313131;
 margin-bottom: 20px;
}
.city{
 width: 37% !important;
 position: relative;
 margin-right:10px !important;
}
.city img{
 width: 100%;
 border-radius: 4px;
}
.cityname{
 position: absolute;
 top:10px;
 color: #fff;
 text-align: left;
 text-indent: 8px;
}
.cityname h4{
 font-size: 18px;
 margin-bottom: 8px;
}
.cityname p{
 font-size: 14px;
}
.citylist{
 text-align: left;
 margin-top: 20px;
}
.citylist span{
 display: inline-block;
 width: 74px;
 height: 24px;
 line-height: 24px;
 font-size: 16px;
 color: #666;
 margin-bottom: 10px
}
</style>
