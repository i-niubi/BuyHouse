<template>
 <div>
  <h2>异乡置业</h2>
 </div>
</template>
<script>
import Vue from "vue"
export default {
 data(){
  return {}
 },
 mounted(){
  let url="https://m.uhouzz.com/index.php/wechatapp/SaleHouse/getIndexInfo"
  Vue.axios.get(url).then((res)=>{
   console.log(res)
  })
 }
}
</script>
