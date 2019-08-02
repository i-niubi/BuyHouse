<template>
  <div id="app">
    <router-link to="/home"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import flexble from "./flexble"
export default {
  name: 'app',
  components: { }
}
</script>

<style>
@import url("http://at.alicdn.com/t/font_1326927_02vm4hghocye.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
*{
  margin: 0;
  padding: 0;
  font-weight:normal
}
li{
  list-style: none;
}
a{
  text-decoration: none
}
</style>
