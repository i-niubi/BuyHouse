<template>
    <div>
        <div class="header">
            <h1><span class="iconfont icon-xiazai6" @click="toPrevious"></span>房贷计算器</h1>
        </div>
        <div class="button">
            <span :class="{title:show }" @click="ls">等额本息</span>
            <span :class="{title:hide }" @click="rs">等额本金</span>
        </div>
        <div class="house-input">
            <p>
                <span>房价总额(¥)</span>
                <b>(万)</b>
                <input type="tel" placeholder="请输入房价总额">
            </p>
            <p>
                <span>首付比例</span>
                <b>(%)</b>
                <input type="tel" placeholder="请输入首付比例">
            </p>
            <p>
                <span>贷款利率</span>
                <b>(%)</b>
                <input type="tel" placeholder="请输入贷款利率">
            </p>
            <p>
                <span>贷款期限</span>
                <b class="iconfont icon-jiantou"></b>
                <select name="" id="" dir="rtl">
                    <option value="0">请选择</option>
                    <option value="1">1年</option>
                    <option value="2">2年</option>
                    <option value="3">3年</option>
                    <option value="4">4年</option>
                    <option value="5">5年</option>
                    <option value="6">6年</option>
                    <option value="7">7年</option>
                    <option value="8">8年</option>
                    <option value="9">9年</option>
                    <option value="10">10年</option>
                    <option value="11">11年</option>
                    <option value="12">12年</option>
                    <option value="13">13年</option>
                    <option value="14">14年</option>
                    <option value="15">15年</option>
                    <option value="16">16年</option>
                    <option value="17">17年</option>
                    <option value="18">18年</option>
                    <option value="19">19年</option>
                    <option value="20">20年</option>
                    <option value="21">21年</option>
                    <option value="22">22年</option>
                    <option value="23">23年</option>
                    <option value="24">24年</option>
                    <option value="25">25年</option>
                    <option value="26">26年</option>
                    <option value="27">27年</option>
                    <option value="28">28年</option>
                    <option value="29">29年</option>
                    <option value="30">30年</option>
                </select>
            </p>
        </div>
        <div class="cal">开始计算</div>
        <div class="reference">
            <h3>买房参考</h3>
            <div class="can">
                <div class="cann">
                    <canvas width="160" height="160" ref="chart"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>
 <script>
 import axios from "axios";
 const echarts = require('echarts');
 export default {
     data(){
         return{
             show:true,
             hide:false,
         }
     },
     mounted(){
         axios.get("https://m.uhouzz.com/index.php/wechatapp/Manage/userInfo?src=webapp")
         .then(res=>{
             console.log(res)
         })
     },
     methods:{
         ls(){
             this.show=true;
             this.hide=false;
         },
         rs(){
             this.show=false;
             this.hide=true;
         },
         toPrevious(){
             this.$router.go(-1)
         },
         initCharts () {
         let myChart = echarts.init(this.$refs.chart);
            myChart.setOption({
            seriesOptions : { //设置多个序列共同的属性
            pieCfg : {
              allowPointSelect : true,
              labels : {
                distance : 40, //文本距离圆的距离
                label : {
                  //文本信息可以在此配置
                },
                renderer : function(value,item){ //格式化文本
                  return value + ' ' + (item.point.percent * 100).toFixed(2)  + '%';
                }
              },
              innerSize : '60%' //内部的圆，留作空白
            }
          },
             series : [{
              type: 'pie',
              name: 'Browser share',
              data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['Others',   0.7]
              ]
          }]
            });
            }
       
     },
     mounted () {
        this.initCharts();
    }

 }
 </script>
 <style scoped>
 @import url(http://at.alicdn.com/t/font_1335275_16xoxlm70ft.css);
.header{
    width:100%;
    position:relative;
    text-align: center;
    border-bottom:1px solid #ccc;
}
.header h1{
    font-weight:100;
    font-size:14px;
    line-height:50px;
}
.header h1 span{
    position:absolute;
    left:5%;
}
.button{
    width: 100%;
    height: 50px;
    display: flex;
    color: #313131;
    line-height: 46px;
    border: 1px dashed #e8e8e8;
    box-shadow: 1px 1px 3px #ccc;
     box-sizing:border-box;
}
.button span{
    flex: 1;
    text-align: center;
    font-size:15px;
}
.title{
    border-bottom: 3px solid #ff5a5f;
}
.house-input{
    width:100%;
    padding-left:20px;
    color:#666;
    box-sizing:border-box;
}
.house-input p{
    height: 50px;
    line-height: 49px;
    border-bottom: 1px solid #e8e8e8;
    padding-right: 15px;
}
.house-input p span{
    font-size:15px;
}
.house-input p b{
    float: right;
    font-size: 15px;
    color: #999;
    line-height: 47px;
    font-weight: 400;
}
.house-input p input{
    float: right;
    border: none;
    text-align: right;
    font-size: 15px;
    line-height: 25px;
    margin-top: 13px;
    width: 180px;
    height: 25px;
    outline:medium;
}
.house-input p select{
    color: #313131;
    float: right;
    height: 49px;
    line-height: 49px;
    border: none;
    direction: rtl;
    font-size: 15px;
    outline:medium;
    appearance:none;
}
.cal{
    margin: 20px 18px 0;
    background: #ff5a5f;
    color: #fff;
    height: 44px;
    font-size: 18px;
    line-height: 44px;
    text-align: center;
}
.reference{
    width: 90%;
    padding-left: 10%;
    position: relative;
}
.reference h3{
    font-size: 18px;
    color: #313131;
    padding: 40px 0 20px;
    border-bottom: 1px solid #e8e8e8;
    font-weight: 900;
}
.can{
    width: 160px;
    height: 160px;
    user-select: none;
    position: relative;
}
.can .cans{
    width:160px;
    height:160px;
}
 </style>
 