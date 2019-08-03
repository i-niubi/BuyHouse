import VueRouter from "vue-router"

import home from "./pages/home.vue"

import GosHouse from "./pages/GosHouse.vue"

import Details from "./components/Details.vue"

import searchhouse from "./pages/searchhouse.vue"

import getHotHouse from "./pages/getHotHouse.vue"

import getHotHousedetaile from "./components/getHotHousedetaile.vue"
import HouseGuide from "./pages/HouseGuide.vue"
import PictureDetails from "./pages/PictureDetails.vue"
const router= new VueRouter({
 routes:[
  {path:"/",redirect:"home"},
  {path:"/home",component:home},
  {path:"/GosHouse/:id",component:GosHouse},
  {path:"/GosHouse/:englishcountry/:region_unique_name:/school_unique_name",component:GosHouse},
  {path:"/Details/:id",component:Details},
  {path:"/searchhouse",component:searchhouse},
  {path:"/getHotHouse",component:getHotHouse,
   children:[{
    path:"getHotHousedetaile",component:getHotHousedetaile
   }]
  },
  {path:"/HouseGuide/:id",component:HouseGuide}
 ]
})



export default router