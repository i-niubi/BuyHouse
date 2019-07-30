import Vue from 'vue'
import App from './App.vue'

import vuex from "vuex"
import store from "./store"


import VueRouter from "vue-router"
import router from "./router"

Vue.use(VueRouter)
Vue.use(vuex)

Vue.config.productionTip = false

new Vue({
  store,router,
  render: h => h(App),
}).$mount('#app')
