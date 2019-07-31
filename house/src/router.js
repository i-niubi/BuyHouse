import VueRouter from "vue-router"

import home from "./page/home.vue"



const router= new VueRouter({
 routes:[
  {path:"/",redirect:"home"},
  {path:"/home",component:home},
 ]
})



export default router