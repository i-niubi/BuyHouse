import VueRouter from "vue-router"

import home from "./pages/home.vue"

import GosHouse from "./pages/GosHouse.vue"

import Details from "./components/Details.vue"
import HouseGuide from "./pages/HouseGuide.vue"
const router= new VueRouter({
 routes:[
  {path:"/",redirect:"home"},
  {path:"/home",component:home},
  {path:"/GosHouse/:id",component:GosHouse},
  {path:"/Details/:id",component:Details},
  {path:"/HouseGuide/:id",component:HouseGuide}
 ]
})



export default router