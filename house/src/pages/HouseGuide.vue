<template>
    <div>
        <div class="header">
            <h1><span class="iconfont "> <</span>{{txt.info.top.title}}</h1>
        </div>
        <div class="banner">
            <img :src="txt.info.top.litpic">
            <p>{{txt.info.top.title}}</p>
        </div>
        <div class="box">
            <div class="box-txt">
                <div class="box-txt-p" v-for="m in txt.list" :key="m.id">
                    <img :src="m.litpic">
                    <div>
                        <p>{{m.title}}</p>
                        <p><span class="iconfont "></span><span>{{m.click_num}}</span><span>{{m.create_time}}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
           txt:"",
        }
    },
    methods:{

    },
    computed:{
     
   },
    mounted(){
        let num=this.$route.params.id;
        axios.get("https://m.uhouzz.com/index.php/wechatapp/pcNews/getNewsList?src=webapp&type_id="+num)
        .then((res)=>{
           console.log(res.data.data.result)
           this.txt=res.data.data.result
        })
    }
}
</script>
<style scoped>
body,h1,h2,h3,h4,h5,h6,li,p,span,ul{
    margin:0;
    padding:0;
}
.header{
    display:inline-block;
     text-align: center;
     width:100%;
     position:relative;
}

.header h1{
    display: block;
    font-size:14px;
    font-weight:100px;
    color:#333;
    line-height: 50px;
}
.header h1 span{
    position:absolute;
    left:10px;
}
.banner{
    width:100%;
    position:relative;
}
.banner img{
    width:100%;
}
.banner p{
    position:absolute;
    font-size:24px;
    color:#fff;
    width:100%;
    text-align: center;
    top:40%;
}
.box{
    width:100%;

}
.box .box-txt{
    width:88%;
    margin:0 auto;

}
.box .box-txt .box-txt-p{
    padding:18px 0;
    border-bottom:1px solid #ccc;
    overflow: hidden;
}
.box .box-txt .box-txt-p img{
    width:102px;
    height:58px;
    margin-right:20px;
    display: block;
}
</style>
