<template>
 <div>  
  <div class="detaile">
   <div class="citylist">
    <div class="cityname" :style="{height:height}">
     <span :class="xb==i?'active':'unactive'" v-for="city,i in HotHouse" :key="i" @click="tab(i)">
      {{ city.title }}
     </span>
    </div>
    <i @click="open" class="iconfont icon-zelvxuanzefeiyongdaosanjiaoxingfandui"></i>
   </div>
   <div class="msgbox">
    <div v-for="msg in HotHouse[xb].houses" :key="msg.id" class="msg">
     <img :src="msg.thumburl" @click="todetail(msg.id)">
     <p>
      <span>{{ msg.chinesecity }}</span>
      <b>{{ msg.title }}</b>
     </p>
     <span>{{ msg.price_rmb_string }}</span>
     <div class="rent">{{ msg.rent }}</div>
     <div class="housetag">
      <span v-for="tag,i in msg.housetag" :key="i" :style="{backgroundColor:tag.tag_color}">{{ tag.tagname }}</span>
     </div>
     <div class="roi">
      <span>{{ up }}</span>
      <b>{{ msg.roi }}%</b>
     </div>
    </div>
   </div>  
  </div>
 </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
 data(){
  return {
   up:"近一年涨幅",
   height:"42px",
   xb:0,
  }
 },
 computed:{
  ...mapState(["HotHouse"])
 },
  mounted(){
  this.getHotHouse()
 },
 methods:{
  todetail(id){
   this.$router.push({path:`/Details/${id}`})
  },
  ...mapActions(["getHotHouse"]),
  open(){
   if(this.height=="42px"){
    this.height="auto"
   }else{
    this.height="42px"
   }
  },
  tab(i){
   this.xb=i
  }
 },
}
</script>
<style scoped>
 .cityname .active{
    color:#ff5a5f;
    border-bottom:3px solid #ff5a5f;
    height:37px
   }
 .cityname .unactive{
    color:#000;
    border-bottom:0;
    height:auto
   }

 .msgbox{
  padding: 0 18px;
 }
 .msg{
  width: 100%;
  margin-top: 20px;
  position: relative;
 }
 .msg img{
  width: 100%;
  height: 160px;
 }
 .msg p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  color: #313131;
  margin-top: 12px;
 }
 .msg p span{
  display: inline-block;
  border-right: 1px solid #d3d3d3;
  padding-right: 8px;
  margin-right: 8px;
 }
 .msg>span{
  color: #ff5a5f;
  font-size: 20px;
  display: inline-block;
  margin: 2px 0
 }
 .msg .rent{
  color: #666;
  font-size: 14px;
 }
 .msg .housetag{
  color: #fff;
  margin-top: 8px;
 }
 .msg .housetag span{
  height: 24px;
  line-height: 24px;
  display: inline-block;
  text-align: center;
  padding: 0 4px;
  border-radius: 3px;
  margin-right: 8px;
  font-size: 14px;
  margin-bottom: 6px;
 }
 .msg .roi{
  position: absolute;
  top: 126px;
  left: 10px;
  color: #fff;
  font-size: 14px;
  text-align: center
 }
 .msg .roi span{
  background: #313131; 
  width: 80px;
 }
 .msg .roi b{
  background: #ff5a5f;
  width: 44px;
 }
 .msg .roi span,.msg .roi b{
  padding: 4px 8px;
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
.cityname span{
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
