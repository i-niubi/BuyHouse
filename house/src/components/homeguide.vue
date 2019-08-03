<template>
 <div>
   <div class="guide">
     <h3>{{ homedata[3].title }}</h3>
     <swiper :options="swiperOption" ref="mySwiper">
       <!-- slides -->
       <swiper-slide class="img" v-for="img in homedata[3].list" :key="img.id">
        <img :src="img.litpic">
        <div class="msg" @click="goHouseGuide(img.id)">
          <h4>{{ img.title }}</h4>
          <p>{{ img.keyword }}</p>
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
 name: 'carrousel',
 data(){
  return { 
    swiperOption: {
      slidesPerView: 1.8,
    }
  }
 },
 computed:{
  ...mapState(["homedata"])
 },
 mounted(){
  
 },
 methods:{
   goHouseGuide(id){
      this.$router.push('/HouseGuide/'+id)
   }
 }
}
</script>
<style scoped>
.guide{
  padding-left: 22px;
}
.guide>h3{
 color: #313131;
 font-size: 18px;
 text-align: left;
 margin: 40px 0 20px
}
.img{
 width: 52% !important;
 position: relative;
 margin-right: 10px!important;
}
.img img{
 width: 100%;
 border-radius: 3px;
 height: 86px;
}
.msg{
 position: absolute;
 width: 100%;
 top: 0;
 color: #fff;
 height: 100%;
 text-align: center;
}
.msg h4{
 font-size: 18px;
 margin-bottom: 6px;
 margin-top: 20px;
}
.msg p{
 font-size: 12px;
}
</style>
