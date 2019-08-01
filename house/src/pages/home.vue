<template>
 <div>
  <div class="title">
   <h2>异乡置业</h2>
  </div>
  <homebanner/>
  <homehot/>
  <homegood/>
  <homehelp/>
  <homeguide/>
  <homerecommend/>
 </div>
</template>
<script>
import axios from "axios"
import {mapActions} from "vuex"
import homebanner from "../components/homebanner"
import homehot from "../components/homehot"
import homegood from "../components/homegood"
import homehelp from "../components/homehelp"
import homeguide from "../components/homeguide"
import homerecommend from "../components/homerecommend"
export default {
 data(){
  return {}
 },
 components: {
  homebanner,homehot,homegood,homehelp,homeguide,homerecommend
 },
 created(){
  this.homedata(),
  this.banner()
 },
 methods:{
  ...mapActions(["homedata","banner"])
 }
}
</script>
<style scoped>
.title{
 height: 45px;
 text-align: center;
 line-height: 45px;
 color: #000;
}
.title h2{
 font-size: 16px;
 font-weight: normal
}
</style>
