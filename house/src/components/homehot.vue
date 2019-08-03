<template>
 <div>
  <div class="hot">
   <ul>
    <li @click="hothouse">
     <span class="iconfont icon-thin-_home_flat"></span>
     <p>精选好房</p>
     <b>HOT</b>
    </li>
    <li>
     <span class="iconfont icon-chazhaofangyuan"></span>
     <p>帮我找房</p>
    </li>
    <li>
     <span class="iconfont icon-daikuanjisuanqi"></span>
     <p>房贷计算器</p>
    </li>
   </ul>
  </div>
 </div>
</template>
<script>
export default {
 methods:{
  hothouse(){
   this.$router.push({path:"getHotHouse"})
  }
 }
}
</script>

<style scoped>
.hot{
 margin-top: 12px;
}
.hot li .iconfont{
 color: #ff5a5f;
 font-size: 34px;
}
.hot ul{
 display: flex;
 justify-content: space-around;
}
.hot ul li{
 position: relative;
}
.hot ul li p{
 margin-top:8px; 
 color:#313131 ;
 font-size: 14px;
}
.hot ul li b{
 display: inline-block;
 background: #fca646;
 color: #fff;
 width: 30px;
 height: 16px;
 border-radius: 7px;
 line-height: 16px;
 text-align: center;
 position: absolute;
 top: 0;
 left:20px
}
</style>
