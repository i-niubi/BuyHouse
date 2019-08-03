import Vue from "vue"
import vuex from "vuex"
Vue.use(vuex)
import axios from "axios"
const store=new vuex.Store({
 state:{
  homedata:"",//首页内容数据
  bannerimg:[],//首页banner轮播数据图片
  HotHouse:[],//精选好房数据
 },
 mutations:{
  gethomedata(state,res){//首页内容数据
   state.homedata=res
  },
  bannerimg(state,res){//首页banner轮播数据图片
   state.bannerimg=res
  },
  getHotHouseData(state,res){//精选好房数据
   state.HotHouse=res
  }
 },
 actions:{
  homedata(store){//首页内容数据
   let url="https://m.uhouzz.com/index.php/wechatapp/SaleHouse/getIndexInfo"
   axios.get(url).then((res)=>{
    store.commit("gethomedata",res.data.data)
   })
  },
  banner(store){//首页banner轮播数据图片
   let url="https://m.uhouzz.com/index.php/wechatapp/SaleHouse/getAdsList"
   axios.get(url).then((res=>{
    store.commit("bannerimg",res.data.data)
   }))
  },
  getHotHouse(store){//精选好房数据
   let url ="https://m.uhouzz.com/index.php/wechatapp/SaleHouse/getHotHouse"
   axios.get(url).then((res)=>{
    store.commit("getHotHouseData",res.data.data)
   })
  }
  
 },
 getters:{}
})


export default store