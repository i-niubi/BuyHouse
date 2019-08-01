import Vue from 'vue'

import vuex from "vuex"
import store from "./store"


import VueRouter from "vue-router"
import router from "./router"

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.use(VueAxios, axios)

Vue.use(VueRouter)
Vue.use(vuex)

Vue.config.productionTip = false
import App from './App.vue'

new Vue({
  store,router,
  render: h => h(App),
}).$mount('#app')
