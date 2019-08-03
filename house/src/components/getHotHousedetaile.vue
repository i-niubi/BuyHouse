<template>
 <div>  
  <div class="detaile">
   <!-- <div v-for="box,i in HotHouse[0]" :key="i"> -->
    <div v-for="msg in HotHouse[0].houses" :key="msg.id" class="msg">
     <img :src="msg.thumburl">
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
   <!-- </div> -->
  </div>
 </div>
</template>
<script>
import {mapState} from "vuex"
export default {
 data(){
  return {
   up:"近一年涨幅"
  }
 },
 computed:{
  ...mapState(["HotHouse"])
 }
}
</script>
<style scoped>
 .detaile{
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
</style>
