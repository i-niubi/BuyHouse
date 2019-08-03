<template>
    <div class="div">
          <main class="position-box">
            <!-- <vue-better-scroll class="wrapper"
                             ref="scroll"
                            :scrollbar="scrollbarObj"
                            :pullDownRefresh="pullDownRefreshObj"
                            :pullUpLoad="pullUpLoadObj"
                            :startY="parseInt(startY)"
                            @pullingDown="onPullingDown"
                            @pullingUp="onPullingUp"> -->
                <div class="header-box">
                    <span class="iconfont icon-xiaoyu header-span" @click="goUpl"></span><span class="iconfont  icon-fangdajing header-span-two"><i>{{name}}买房</i></span><div class="head"></div>
                </div>
                <div class="bg"></div>
                <div v-for="m in houses" :key="m.house_id" class="big-box" @click="toDetail(m.house_id)">
                            <div class="img-box">
                                <img :src="m.thumburl" >
                                <div class="txt"><span class="txt-l">{{m.base_desc.length==8? m.base_desc[5].slice(0,-3) : m.base_desc[4].slice(0,-3)}}</span><span class="txt-r">{{m.base_desc.length==8?   m.base_desc[5].slice(-2,-1) : m.base_desc[4].slice(-2,-1)}}%</span></div>
                            </div>
                            <p><span class="p-l">{{m.region.city_lang}}</span><span class="p-r">{{m.title}}</span></p>
                            <h3>￥<span>{{m.cost.price}}</span>万起</h3>
                            <h4>{{m.desc_string}}</h4>
                            <h5 v-for="k,i in m.tags" :key="i" class="inline">
                                <span :style={background:k.color}>{{k.name_lang}}</span>
                            </h5>
                           
                </div>
            <!-- </vue-better-scroll> -->
      </main>

        <div class="footer">
            <p>排序<span class="iconfont icon-3 ssp"></span></p>
            <p>筛选<span class="iconfont icon-shaixuan"></span></p>
        </div>
       
    </div>
</template>

<script>
import axios from "axios";
import VueBetterScroll from 'vue2-better-scroll';
export default {
    data(){
        return{
            houses:[],
            name:'',
        }
    },
     components:{VueBetterScroll},
     mounted() {
        let name=this.$route.params.id
        console.log(name)
        let url = `/api/HouseSaleSearchFilter/getHouseList?src=webapp&country_unique_name=${name}&type_id=24`;
        console.log(url)
        axios.get(url)
        .then((res) => {
            // console.log(res.data.data.result)
           this.name=res.data.data.crumbs[0].name
           this.houses=res.data.data.result
           
        })


    },
    methods:{
        toDetail(id){
            
            this.$router.push('/Details/'+id)
        },
      
        goUpl(){
             this.$router.go(-1)
        }
    }
    //  methods:{
    //     toDetail(id){
    //         this.$router.push({name:"detail",params:{id:id}})
    //     },
    //     onPullingDown() {
    //         //下拉刷新
           
    //         // 请求刷新接口，获取最新数据
    //         this.loadData(true)
    //     },
    //     onPullingUp() {
    //         //上拉加载更多数据
           
    //         //请求接口，获取数据
    //         this.loadData()
    //     },
    //     loadData(refresh){
            
    //        axios.get("/ajax/movieOnInfoList")
    //         .then(res =>{
               
            
    //            if(refresh){
    //                 this.movies = movies;
    //             }else{
    //                 this.movies = this.movies.concat(movies);
    //             }
    //             this.loading = false;
    //             //调用强制刷新函数，更新页面
    //             this.$refs.scroll.forceUpdate(true)
           
    //     })
    //     }
    //  }

     
}
</script>
<style scoped>
@import url("http://at.alicdn.com/t/font_1325439_1usenc4qpvy.css");
input,h1,h2,h3,h4,h5,h6,p,li{
    margin:0;
    padding:0;
}
.footer{
   background: #fff;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
    border-radius: 100px;
    width: 60%;
    height: 48px;
    position: fixed;
    left: 20%;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer p{
    padding: 0 10px;
}
.footer p span{
    font-size:20px;
    font-weight:800;
    color:#333;
}
.footer p .ssp{
    padding-right:10px;
   border-right: 1px solid #999;
}
.header-box{
   position: relative;
   top:5px;
   width:88%;
   margin-bottom:5px;
   padding-bottom:10px;
   margin:0 auto;
}
.header-box .header-span{
    position:absolute;
    margin-top:10px;
    font-size:14px;
    color:#999;
    left:-10px;
}
.header-box .header-span-two{
    position:absolute;
    margin-top:6px;
    margin-left:10%;
    font-size:14px;
}
.header-box .header-span-two i{
   font-style:normal;
   margin-left:5px;
}
.bg{
    width:100%;
    height:1px;
    background:#ccc;
}
.head{
  width:80%;
  margin-left:5%;
  background:#f7f7f7;
  height:30px;
  border-radius:15px;
  padding:2px;
}
.big-box{
    width:90%;
    margin:0 auto;
    margin-bottom:20px;
}
.img-box{
    width:100%;
    position: relative;
}
.img-box img{
    width:100%;
    height:160px;
    position:relative;
}
.img-box .txt{
    position:absolute;
    bottom:20px;
    left:20px;
}
.img-box .txt .txt-l{
    background:#313131;
    color:#fff;
    font-size:14px;
    border-radius: 2px 0 0 2px;
    padding:2px 5px;
}
.img-box .txt .txt-r{
    background:#ff5a5f;
    color:#fff;
    padding:2px 9px;
    border-radius: 0 2px 2px 0;
    font-size:14px;
}
.big-box p{
    display: inline-block;
    overflow: hidden;
    width:100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:16px;
    margin:10px 0;
}
.big-box p .p-l{
    padding-right:10px;
    border-right:1px solid #313131;
}
.big-box p .p-r{
    padding-left:10px;
    
}
.big-box h3{
    font-weight: 100;
    font-size:20px;
    color:#ff5a5f;
    margin-bottom:5px;
}
.big-box h3 span{
    font-size:24px;
}
.big-box h4{
    font-weight:100;
    font-size:14px;
    color:#666;
    margin-bottom:5px;
}
.big-box h5{
    display: inline-block;
    font-weight:100;
}
.big-box h5 span{
    height: 24px;
    border-radius: 2px;
    margin-right: 5px;
    font-size: 14px;
    line-height: 32px;
    color: #fff;
    padding: 4px 5px;
}
</style>
