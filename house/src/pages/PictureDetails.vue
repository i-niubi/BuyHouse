<template>
    <div>
        <div class="title">
            <div>
                <i class="iconfont icon-jiantou3" @click="back"></i>
                </div>
            <span>楼盘相册</span>
        </div>
        <div class="show">
            <h2>建筑外观</h2>
            <div>
                <img :src="img" v-for="img,i in imgs[0].list" :key="i">
            </div>
            <h2>内部购置</h2>
            <div>
                <img :src="img" v-for="img,i in imgs[1].list" :key="i">
            </div>
            <h2>房源图册</h2>
            <div>
                <img :src="img" v-for="img,i in imgs[2].list" :key="i">
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            imgs:[],
            id:0
        }
    },
    mounted(){
        this.id=this.$route.params.id
        let url=`https://m.uhouzz.com/index.php/wechatapp/SaleHouseDetail/getSaleHouseData?hid=${this.id}`
        console.log(this.id)
        axios.get(url).then((res)=>{
            this.imgs=(res.data.data.pc_house_detail.data.headimglist)
            console.log(this.imgs)
        })
    },
    methods:{
        back(){
            this.$router.push({path:`/Details/${this.id}`})
        }
    }
}
</script>
<style scoped>
.title{
    width: 100%;
    height: 50px;
    text-align: center;
    position: relative;
    line-height: 50px;
    border-bottom: 1px solid #d3d3d3
}
.title>div{
    position: absolute;
    padding-left: 16px;
}
.title>span{
    font-size: 16px;
}
.show{
    width: 100%;
    padding-left: 20px;
    box-sizing: border-box;
}
.show h2{
    font-size:18px ;
    margin: 20px 0;
}
img{
    width: 86px;
    height: 86px;
    margin: 0 10px 10px 0
}
</style>
