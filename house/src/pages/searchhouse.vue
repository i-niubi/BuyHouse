<template>
 <div>
  <div class="searchinput">
   <div class="content">
    <i class="iconfont icon-sousuo"></i>
    <input type="text" placeholder="搜索您想买房的城市">
    <span @click="backhome">取消</span>
   </div>
   <h4>热门搜索</h4>
   <ul>
    <li v-for="name in hotSchools" :key="name.id" @click="houselist(name.englishcountry)">
     <div>
      <span>{{ name.chinesecountry }}，</span>
      <span>{{ name.chinesecity }}，</span>
      <span>{{ name.chinesename }}</span>
     </div>
     <p>{{ name.englishname }}</p>
    </li>
   </ul>
   <ul>
    <li v-for="name in hotCities" :key="name.rid" @click="houselist(name.englishcountry)">
     <div>
      <span>{{ name.chinesecountry }}，</span>
      <span>{{ name.chinesestate }}，</span>
      <span>{{ name.chinesecity }}</span>
     </div>
     <p>
      {{ name.englishcountry }}
      {{ name.englishstate }}
      {{ name.englishcity }}
     </p>
    </li>
   </ul>
  </div>
 </div>
</template>
<script>
import axios from "axios"
export default {
 data(){
  return{
   hotSchools:[],
   hotCities:[]
  }
 },
 mounted(){
  let url="https://m.uhouzz.com/index.php/wechatapp/region/popularItem"
  axios.get(url).then((res)=>{
   this.hotSchools=(res.data.data.hotSchools)
   this.hotCities=(res.data.data.hotCities)
   console.log(this.hotSchools)
  })
 },
 methods:{
  backhome(){
   this.$router.push({path:"home"})
  },
  houselist(name){
   this.$router.push({path:`/GosHouse/${name}`})
   console.log(name)
  }
 }
}
</script>
<style scoped>
.content{
 width: 100%;
 height: 50px;
 top: 0;
 left: 0;
 color: #666;
 display: flex;
 padding: 0 20px;
 justify-content: space-between;
 font-size: 15px;
 line-height: 50px;
 box-sizing: border-box;
 background: #fff;
}
.content input{
 width: 206px;
 outline: none;
 border: 0;
 font-size: 14px
}
.content i{
 font-size: 20px;
 color: #313131;
}
.searchinput h4{
 width: 100%;
 height:30px ;
 font-size:12px ;
 background:#f0f0f0 ; 
 color: #999;
 line-height: 30px;
 padding-left: 20px;
 position: relative;
 box-sizing: border-box;
 /* top: 30px; */
}
.searchinput ul{
 width: 100%;
 padding-left: 20px;
 box-sizing: border-box;
}
.searchinput ul li{
 height: 86px;
 border-bottom: 1px solid #e8e8e8;
 padding:21px 0 ;
 box-sizing: border-box
}
.searchinput ul li div span{
 color: #313131;
 font-size: 16px;
}
.searchinput ul li p{
 color: #999;
 font-size: 14px;
 margin-top: 4px;
}
</style>
