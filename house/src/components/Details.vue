<template>
    <div>
        <div class="header-box">
                    <span class="iconfont icon-xiaoyu header-span"></span>
                    <h1>房源详情</h1>
        </div>
       <swiper :options="swiperOption" ref="mySwiper" >
          <swiper-slide v-for="m,i in imgs" :key="i">
              <img :src="m" class="simg">
          </swiper-slide>
         
       </swiper>
         <div class="img-length">{{imgs.length}}</div>
         <h2>{{txt.title}}</h2>
         <div class="money">
             <p class="mp">{{txt.sign}}<span class="msp">{{txt.price}}</span>{{txt.qi}}<span class="mssp">{{txt.sign_enl+txt.price_enl_wan+txt.qi}}</span>
             <span class="jijia">房贷计算器</span></p>
        </div> 
        <div v-for="kk in txt.housetag" :key="kk.tid" class="ziu">
                <span :style="{ color:kk.tag_color, border:kk.tag_color}">{{kk.tagname}}</span>
        </div>
        <ul class="xq">
            <li>
                <span class="lsp">每平米单价</span>
                <p>{{txt.sign_cn}}<span class="csp">{{txt.unitprice}}</span>{{txt.qi}}</p>
            </li>
             <li class="cen">
                <span class="lsp">{{txt.base_detail[10].title}}</span>
                <p><span class="csp">{{txt.base_detail[10].value.slice(0,-1)}}</span>%</p>
            </li>
             <li>
                <span class="lsp">{{txt.base_detail[11].title}}</span>
                <p><span class="csp">{{txt.base_detail[11].value.slice(0,-1)}}</span>%</p>
            </li>
        </ul>
        <div class="box-pink">
            <div class="box-p">
                <img src='https://pcpic.uhouzz.com/webappsaleonline/images/dbf4c930c25f27492033383d9333679f.gif'>
                <div class="">
                    <p >更低价格保障</p>
                    <p class="p-cen">没有比这更低价，如果有，我照给。</p>
                    <p >条款和条件</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

import axios from 'axios';
export default {
    
  components: {
    swiper,
    swiperSlide
  },
    data(){
        return{
            imgs:[],
            foot:[],
            swiperOption:{

            },
            txt:[],
            sld:"1px solid",
        }
    },
     computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
        let id = this.$route.params.id;
        axios.get("https://m.uhouzz.com/index.php/wechatapp/SaleHouseDetail/getSaleHouseData?hid="+id+"&src=webapp")
        .then((res) => {
           console.log(res.data.data.pc_house_detail.data)
           this.txt=res.data.data.pc_house_detail.data
           for(var i=0;i<res.data.data.pc_house_detail.data.headimglist.length;i++){
               for(var k=0;k<res.data.data.pc_house_detail.data.headimglist[i].list.length;k++){
                   this.imgs.push(res.data.data.pc_house_detail.data.headimglist[i].list[k])
               }
           }
            this.foot=res.data.data.pc_similar_houses_list;
           
        })
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    
    },
    

}
 
</script>
<style scoped>
input,h1,h2,h3,h4,h5,h6,p,li,ul{
    margin:0;
    padding:0;
}
img{
    display:block;
}
li{
    list-style: none;
}
@import url("http://at.alicdn.com/t/font_1325439_1usenc4qpvy.css");
.header-box{
   position: relative;
   width:100%;
   background:#fff;
   border-bottom:2px solid #f7f7f7;
   padding-bottom:10px;
}
.header-box .header-span{
    position:absolute;
    margin-top:10px;
    font-size:14px;
    color:#999;
}
.header-box h1{
    font-weight:100;
    font-size:16px;
    text-align: center;
    line-height: 30px;
}
.simg{
    width:100%;
    height:200px;
}
.img-length{
    z-index: 1000;
    background:red;
    position:absolute;
    right:1%;
    top:20%;
}
h2{
    color: #313131;
    font-size: 22px;
    line-height: 27px;
    font-weight: 400;
    padding: 15px 20px;
}
.money .mp{
    padding-left:20px;
    color:#ff5a5f;
    font-size:14px;
}
.money .mp .msp{
    font-size:24px;
}
.money .mp .mssp{
    font-size:14px;
    color:#999;
    margin-left:10px;
}
.money .mp .jijia{
    border: 1px solid #fca646;
    text-align: center;
    font-size: 12px;
    color: #fca646;
    margin-left:80px;
    border-radius: 3px;
    padding:3px 6px;
}
.ziu{
    display: inline-block;
    margin:3px 0 3px 20px;
   
}
.ziu span{
    margin-left:0;
   font-size:12px;
}
.xq{
    overflow: hidden;
    margin-left:20px;
    border-top:1px solid #e8e8e8;
    border-bottom:1px solid #e8e8e8;
    display: flex;
    justify-content: space-around;
}
.xq li{
    float:left;
    text-align: center;
    margin:15px 0;
}
.xq .cen{
    margin:15px 0px;
    padding:0 30px;
    border-left:1px solid #e8e8e8;
    border-right:1px solid #e8e8e8;
    
}
.xq li .lsp{
    color:#999;
    font-size:12px;
}
.xq li p{
    color:#ff5a5f;
    font-size:12px;
}
.xq li p .csp{
    font-size:18px;
    color:#ff5a5f;
}
.box-pink .box-p{
    background:#fff2f1;
    overflow: hidden;
    margin: 20px 0 10px 20px;
    padding:10px;
}
.box-p img{
    width: 88px;
    height: 54px;
    margin-right: 10px;
    float:left;
    margin-left:10px;
}
.box-p div{
    float:left;
}
.box-p div p{  
    color:red;
    font-size:12px;
}
.box-p div .p-cen{
    color:#000;
    font-size:12px;
    margin-left:-20px;
    transform: scale(0.8)
}
</style>
