<template>
    <div>
        <div class="header-box">
                    <span class="iconfont icon-xiaoyu header-span" @click="goUpl"></span>
                    <h1>房源详情</h1>
        </div>
       <swiper :options="swiperOption" ref="mySwiper" >
          <swiper-slide v-for="m,i in imgs" :key="i">
              <img :src="m" class="simg">
          </swiper-slide>
         
       </swiper>
         <div class="img-length">{{num}}/{{imgs.length}}</div>
         <h2>{{txt.title}}</h2>
         <div class="money">
             <p class="mp">{{txt.sign}}<span class="msp">{{txt.price}}</span>{{txt.qi}}<span class="mssp">{{txt.sign_enl+txt.price_enl_wan+txt.qi}}</span>
             <span class="jijia">房贷计算器</span></p>
        </div> 
        <div v-for="kk in txt.housetag" :key="kk.tid" class="ziu">
            <span :style="{ color:kk.tag_color,border:border,borderColor:kk.tag_color}">{{kk.tagname}}</span>
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
        <div class="project">
            <h3>项目信息</h3>
            <ul class="project-ul">
                <li>{{txt.base_detail[8].title}} : <span> {{txt.base_detail[8].value}}</span></li>
                <li>{{txt.base_detail[12].title.slice(0,-2)}} : <span> {{txt.base_detail[12].value}}</span></li>
                <li>{{txt.base_detail[0].title}} : <span> {{txt.base_detail[0].value}}</span><span class="iconfont icon-location"> </span></li>
            </ul>
            <div class="more-project">更多项目信息</div>
            <div class="consultation">
                <span class="iconfont icon-daohangxinxi"></span>
                <span>一键咨询更多打折优惠…</span>
                <span class="three">优惠咨询</span>
            </div>
        </div>
        <div class="bg"></div>
        <div class="advantage">
            <h3>项目优势</h3>
            <ul>
                <li><span class="iconfont icon-biaoqian"></span>{{txt.recommendReason[0]}}</li>
                <li><span class="iconfont icon-biaoqian"></span>{{txt.recommendReason[1]}}</li>
                <li><span class="iconfont icon-biaoqian"></span>{{txt.recommendReason[2]}}</li>
            </ul>
        </div>
        <div class="bg"></div>
        <div class="details">
            <h3>详情介绍</h3>
            <div :style="{height:height}" class=" details-p" v-html="txt.morelink"></div>
            <div class="zoom" @click="nm">
                <span class="sf" ref="sff">{{ open }}</span>
                <span class="fx" :style="{transform: rotate}"></span>
            </div>

        </div>
        <div class="apartment">
            <div class="apartment-box">
                <h5>品质户型({{txt.layout.length}})<span>全部户型></span></h5>
            </div>
                 <swiper :options="swiperOption" ref="mySwiper" class="apartment-boxs">
                     <swiper-slide v-for="box in txt.layout" :key="box.id">
                    <p >{{box.title}}</p>
                    <p >总面积:{{box.size}}㎡</p>
                    <p v-html="box.price_rmb_string"></p>
                  </swiper-slide>
             </swiper>
        </div>
        <div class="map">
            <h3>周边地图</h3>
            <img src="https://maps.google.cn/maps/api/staticmap?markers=51.570806,-0.089382&zoom=13&size=375x200&scale=2&format=png&key=AIzaSyB4ggOBQ9UfDbEhcKy8aBAv46YBu03tjUA&language=zh-CN" >
            <div class="txt">{{txt.address}}</div>
            <div><p>周边设施</p></div>
            <div :style="{height:height2}">
                <p v-for="ss,i in txt.nearbyfacilities" :key="i"><span>{{ss.title}}</span><span>{{ss.value}}</span></p>
            </div>
            <p class="show" @click="show">{{ msg }}<i :style="{transform: rotate2}"></i></p>
        </div>
        <div class="bg"></div>
        <div class="house-process">
            <h3>购房流程</h3>
            <div class="house-process-box">
                <div class="house-process-box-div">
                    <img src="https://pcpic.uhouzz.com/webappsaleonline/images/95219129cdfcef0e2036349208025b9e.png" >
                    <div>
                        <p>预约咨询</p>
                        <p>选择意向国家/意向总价/置业目的等</p>
                    </div>
                </div>
                <div class="house-process-box-div">
                    <img src="https://pcpic.uhouzz.com/webappsaleonline/images/8128f340ccfb09a411df704df21850ec.png" >
                    <div>
                        <p>预订房源</p>
                        <p>置业顾问一对一服务，项目筛选</p>
                    </div>
                </div>
                <div class="house-process-box-div">
                    <img src="https://pcpic.uhouzz.com/webappsaleonline/images/a0e7b54888bd3114bce4238b679cfea2.png" >
                    <div>
                        <p>认购签约</p>
                        <p>选定房号，支付定金</p>
                    </div>
                </div>
                <div class="house-process-box-div">
                    <img src="https://pcpic.uhouzz.com/webappsaleonline/images/7224ce46bf2fc8a9093bbeedbb65036e.png" >
                    <div>
                        <p>交换合同</p>
                        <p>支付首付，签订购房合同</p>
                    </div>
                </div>
                <div class="house-process-box-div">
                    <img src="https://pcpic.uhouzz.com/webappsaleonline/images/f6b7226b9fa4d9622bad2f6b0e1b7828.png" >
                    <div>
                        <p>支付尾款</p>
                        <p>交房前支付剩余尾款或申请贷款</p>
                    </div>
                </div>
                <div class="house-process-box-div">
                    <img src="https://pcpic.uhouzz.com/webappsaleonline/images/d8e9a2465092dc29f88c955f0752a00f.png" >
                    <div>
                        <p>产权过户</p>
                        <p>完成产权登记和房屋交易</p>
                    </div>
                </div>
                <div class="house-process-footer">免费咨询详细信息</div>
            </div>
        </div>
        <div class="bg"></div>
        <div class="guide">
            <img src="https://pcpic.uhouzz.com/webappsaleonline/images/721c0adbd7437da3e2d893f54e2cd18d.png">
            <p>
                <span>{{guide.title}}</span>
                <span>{{guide.keyword}}</span>
            </p>
            <p>查看更多</p>
        </div>
        <div class="bg"></div>
        <div class="fy">
            <h3>附近房源</h3>
        <swiper :options="swiperOption" ref="mySwiper" >
          <swiper-slide v-for="ll in fy" :key="ll.bid" class="fy-box">
                  <img :src="ll.thumburl" >
              <div class="fy-box-text">
                  <p>{{ll.title}}</p>
                  <p>{{ll.address}}</p>
                  <p>{{ll.price_string}}</p>
              </div>
          </swiper-slide>
       </swiper>
       
        </div>
         <div class="ssk">
           <div class="sku">
            <p></p>
            <span>房源编号:{{txt.sku}}</span>
        </div>
       </div>
       <div class="footer">
           <div class="footer-lf">
              在线咨询
           </div>
            <div class="footer-rt">
                预约顾问
              <a href="#"></a>
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
            //   slidesPerView: ,
            },
            txt:[],
            sld:"1px solid",
            num:1,
            guide:[],
            fy:[],
            height:"200px",
            open:"展开",
            rotate:"rotate(180deg)",
            msg:"展开",
            height2:"66px",
            rotate2:"rotate(180deg)",
            border:"1px solid"
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
           console.log(res.data.data.pc_similar_houses_list)
           this.fy=res.data.data.pc_similar_houses_list
           this.guide=res.data.data.webapp_news_list
           this.txt=res.data.data.pc_house_detail.data
           for(var i=0;i<res.data.data.pc_house_detail.data.headimglist.length;i++){
               for(var k=0;k<res.data.data.pc_house_detail.data.headimglist[i].list.length;k++){
                   this.imgs.push(res.data.data.pc_house_detail.data.headimglist[i].list[k])
               }
           }
            this.foot=res.data.data.pc_similar_houses_list;
           
        })
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(1, 1000, false)
    
    },
    methods:{
        goUpl(){
            this.$router.go(-1)
        },
        nm(){
            if(this.height=="200px"){
                this.height="auto",
                this.open="收起",
                this.rotate="rotate(0deg)"           
            }else{
                this.height="200px",
                this.open="展开",
                this.rotate="rotate(180deg)"           
            }
        },
        show(){
            if(this.height2=="66px"){
                this.height2="auto",
                this.msg="收起",
                this.rotate2="rotate(0deg)"           
            }else{
                this.height2="66px",
                this.msg="展开",
                this.rotate2="rotate(180deg)"           
            }
        }
    }

}
 
</script>
<style scoped>
@import url("http://at.alicdn.com/t/font_1331738_880f9e4hxes.css");
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
   margin-top:5px;
}
.header-box .header-span{
    position:absolute;
    margin-top:10px;
    font-size:14px;
    color:#999;
}
.header-box h1{
    font-weight:100;
    font-size:14px;
    text-align: center;
    line-height: 30px;
   margin-left:10px;
}
.simg{
    width:100%;
    height:200px;
}
.img-length{
    z-index: 1000;
    position:absolute;
    right:5%;
    top:37%;
    color:#000;
}
h2{
    color: #313131;
    font-size: 22px;
    line-height: 27px;
    font-weight: 400;
    padding: 15px 20px;
}
.money{
    position:relative;
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
    position:absolute;
    right:10px;
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
   display: inline-block;
   padding: 4px
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
.box-pink{
    width: 100%;
}
.box-pink .box-p{
    background:#fff2f1;
    overflow: hidden;
    width:89%;
    margin:20px auto;
    padding:15px 0;
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
    font-size:16px;
}
.box-p div .p-cen{
    color:#000;
    font-size:12px;
    margin-left:-20px;
    transform: scale(0.8)
}
.project{
    width:88%;
    margin:0 auto;
}
.project h3{
    font-weight:100;
    font-size:20px;
    color:#333;
    margin:10px 0;
}
.project .project-ul li{
    color:#999;
    font-size:14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom:12px;
}
.project .project-ul li span{
    color:#333;
}
.project .more-project{
    width: 100%;
    height: 45px;
    color: #666;
    text-align: center;
    line-height: 45px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.project .consultation{
    margin-top: 20px;
    height: 44px;
    display: flex;
    font-size: 14px;
    align-items: center;
    color: #ff5a5f;
    background: #ffeeef;
    padding: 0 15px;
    margin-bottom: 15px;
}
.project .consultation .icon-daohangxinxi{
    font-size:24px;
    margin-right:5px;
}
.project .consultation .three{
    width: 75px;
    height: 30px;
    background: #ff5a5f;
    color: #fff;
    border-radius: 3px;
    line-height: 30px;
    text-align: center;
}
.bg{
    height:8px;
    width:100%;
    background:#f7f7f7;
}
.advantage{
   width:88%;
   margin:0 auto;
}
.advantage h3{
    font-size:20px;
    color:#333;
    margin:20px 0;
}
.advantage ul li{
    color: #666;
    font-size: 14px;
    margin-bottom:15px;
}
.advantage ul li span{
    color: #fca464;
    margin-right: 5px;
}
.details{
    width:88%;
    margin:10px auto;
}
.details h3{
    font-size:20px;
    color:#333;
    margin:10px 0;
    font-weight:800;
}
.details .details-p{
    overflow: hidden;
    height: 200px;
    position: relative;
    font-size:14px;
}
.details .zoom{
    text-align: center;
    font-size:14px;
    padding:15px 0;
}
.details .zoom .fx{
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #666;
    margin: 0 0 0 5px;
    position: relative;
    top: -3px;
}
.apartment{
    width:100%;
    background:#f7f7f7;
    padding-bottom:40px;
}
.apartment .apartment-box{
    width:88%;
    margin:0 auto;
}
.apartment .apartment-box h5{
   font-size:18px;
   position:relative;
   padding:20px 0;
   color:#000;
}
.apartment .apartment-box h5 span{
   font-size:12px;
   position: absolute;
   right:2%;
   color:#666;
   margin-top:5px;
}
.apartment .apartment-boxs{
    white-space: nowrap;
    overflow-y: auto;
    display: flex;
}
.apartment .apartment-boxs div{
    flex: 1 0 190px;
    height: 110px;
    background: #fff;
    border-radius: 3px;
    border: 1px solid #d4d4d4;
    box-shadow: 2px 5px 5px #ccc;
    /* padding: 13px 0 13px 20px; */
    font-size: 16px;
    position: relative;
    display: inline-block;
    margin-left: 20px;
}
.apartment .apartment-boxs div p:nth-of-type(1){
    margin-top:13px;
    line-height: 27px;
    margin-left: 20px;
    color:#333;
}
.apartment .apartment-boxs div p:nth-of-type(2){
    line-height: 27px;
     margin-left: 20px;
    color:#999;
}
.apartment .apartment-boxs div p:nth-of-type(3){
    margin-left: 20px;
    font-size: 18px;
    color: #ff5a5f;
    line-height: 27px;
}
.map{
    width:88%;
    margin:0 auto;
}
.map h3{
    padding: 20px 0;
    font-size: 18px;
    color: #313131;
    text-align: left;
    font-weight:800;
}
.map img{
    width:100%;
    margin-bottom:20px;
}
.map div{
    font-size: 14px;
    color: #666;
    line-height: 1.5;
   
   
}
.map div:nth-of-type(3){
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    font-weight: 200;
    overflow: hidden;
    height:66px;
}
.map .show{
    text-align: right;
    font-size: 14px;
    color: #666;
    line-height: 15px;
    padding: 15px 0;
}
.map .show i{
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #666;
    margin: 0 0 0 5px;
    position: relative;
    top: -3px;
}
.house-process{
    width:88%;
    margin:0 auto;
    padding-bottom:20px;
}
.house-process h3{
    font-size: 18px;
    color: #313131;
    margin-bottom: 20px;
    margin-top:30px;
}
.house-process .house-process-box .house-process-box-div{
    display: flex;
    margin-bottom: 20px;
}
.house-process .house-process-box .house-process-box-div img{
    height:40px;
    width:40px;
    margin-right: 20px;
} 
.house-process .house-process-box .house-process-box-div div p:nth-of-type(1){
    font-size:17px;
} 
.house-process .house-process-box .house-process-box-div div p:nth-of-type(2){
    font-size:12px;
    color:#666;
} 
.house-process .house-process-footer{
    width:100%;
    padding-right:6%;
    height: 50px;
    background: #fef6ec;
    color: #fca646;
    text-align: center;
    line-height: 50px;
    font-size:16px;
}
.guide{
    display: flex;
    align-items: center;
    padding: 13px 20px;
    background: #fff;
    margin: 10px 0;
}
.guide img{
   width:96px;
   height:75px;
}
.guide p:nth-of-type(1) span:nth-of-type(1){
    font-size: 18px;
    margin-bottom: 5px;
    display: block;
}
.guide p:nth-of-type(1) span:nth-of-type(2){
    font-size: 14px;
    color:#666;
    display: block;
}
.guide p:nth-of-type(1){
    flex: 1;
    text-align: left;
}
.guide p:nth-of-type(2){
    width: 78px;
    height: 30px;
    background: #ff5a5f;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 30px; 
}
.fy{
    width:88%;
    margin:0 auto;
   padding-bottom:20px;
}
.fy h3{
    font-weight:800;
    font-size:18px;
    color:#333;
    margin:20px 0;
}
.fy .fy-box{
    width:100%;
    margin:0 5px;
    padding-bottom:20px;
}
.fy .fy-box img{
    width:100%;
    height:192px;
}
.fy .fy-box .fy-box-text p:nth-of-type(1){
    font-size: 15px;
    color: #313131;
    margin: 10px 0 0;
    white-space: normal;
}
.fy .fy-box .fy-box-text p:nth-of-type(2){
    color: #666;
    font-size: 13px;
}
.fy .fy-box .fy-box-text p:nth-of-type(3){
    margin: 5px 0 0;
    color: #ff5a5f;
    font-size: 18px;
}
.ssk{
    width:100%;
    background: #f7f7f7;
    border-bottom:20px solid #f1f1f1;
    margin-bottom:42px;
}
.sku{
    font-size: 14px;
    color: #999;
    text-align: center;
    width:88%;
    margin:0 auto;
    padding:5px 0;
}
.sku p{
    border-bottom: 1px solid #d3d3d3;
    width: 100%;
    position: relative;
    top: 20px;
    z-index: 1;
}
.sku span{
    display: block;
    width:220px;
    position: relative;
    z-index: 2;
    background: #f7f7f7;
    margin: 10px auto 15px;
}
.footer{
    position: fixed;
    width: 100%;
    bottom: 0;
    left:0;
    background: #fff;
    z-index: 20;
    display:flex;
    padding:5px 0 ;
}
.footer .footer-lf{
    width:50%;
    height: 40px;
    background: #ff5a5f;
    float: left;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
}
.footer .footer-rt{
    width:50%;
    height: 38px;
    float: left;
    line-height: 38px;
    color: #ff5a5f;
    border: 1px solid #ff5a5f;
    font-size: 16px;
    border-radius: 2px;
    text-align: center;
}
</style>
