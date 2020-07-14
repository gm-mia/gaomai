<template>
   <div class="store">
     <div class="zpxf">
       <div class="zpxf-left">
         <h2>Mia粥铺</h2>
         <p><img src="./star/star36_on@2x.png"/>
         <img src="./star/star36_on@2x.png"/>
         <img src="./star/star36_on@2x.png"/>
         <img src="./star/star36_on@2x.png"/>
         <img src="./star/star24_off@3x.png"/>
         <span>(661)</span> <span>月售690单</span> </p>
       </div>
       <div class="zpxf-right">
         <img src="../assets/shoucang.jpg"/>
         <p>已收藏</p>
       </div>
       <div class="hr"></div>
     </div>
     <div class="qsp">
       <div class="qsp-left">
         <p class="top">起送价</p>
         <p class="bottom">20元</p>
       </div>
       <div class="qsp-hr"></div>
       <div class="qsp-center">
         <p class="top">商家配送</p>
         <p class="bottom">4元</p>
       </div>
       <div class="qsp-hr"></div>
       <div class="qsp-right">
         <p class="top">平均配送时间</p>
         <p class="bottom">39分钟</p>
       </div>
     </div>
     <div class="fgf"></div>
     <div class="gghd">
       <h2>公告与活动</h2>
       <p>强粥品香坊其烹饪粥料的秘方源于中国千年古法,在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天
          然、0添加的良心品质深的消费者青睐,发展至今成为粥类引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
       </p>
       <div class="gghd-hr"></div>
     </div>
     <div class="yh">
       <div class="yh-box">
         <img src="./seller/decrease_4@2x.png">
         <p>在线支付满28减5，满50减10</p>
       </div>
       <div class="yh-hr"></div>
       <div class="yh-box">
         <img src="./seller/discount_4@2x.png">
         <p>单人精彩赛</p>
       </div>
       <div class="yh-hr"></div>
       <div class="yh-box">
         <img src="./seller/discount_4@2x.png">
         <p>清肺雪梨汤8折抢购</p>
       </div>
       <div class="yh-hr"></div>
       <div class="yh-box">
         <img src="./seller/special_4@2x.png">
         <p>特价饮品八折抢购</p>
       </div>
       <div class="yh-hr"></div>
       <div class="yh-box">
         <img src="./seller/special_4@2x.png">
         <p>单人特色套餐</p>
       </div>
       <div class="yh-hr"></div>
       <div class="yh-box">
         <img src="./seller/invoice_4@2x.png">
         <p>该商家支持开发票，请在下单时填写好发票抬头</p>
       </div>
       <div class="yh-hr"></div>
       <div class="yh-box">
         <img src="./seller/guarantee_4@2x.png">
         <p>已加入“外卖保”计划，食品安全保障</p>
       </div>
     </div>
     <div class="fgf"></div>
     <div class="sjsj">
       <h2>商家实景</h2>
       <img src="../assets/sjsj.jpg">
       <img src="../assets/sjsj.jpg">
       <img src="../assets/sjsj.jpg">
     </div>
     <div class="fgf"></div>
     <div class="sjxx">
       <h2>商家信息</h2>
       <div class="sjxx-hr"></div>
       <p>该商家支持开发票，请在下单时填写好发票抬头</p>
       <div class="sjxx-hr"></div>
       <p>品类：其他菜系、包子粥店</p>
       <div class="sjxx-hr"></div>
       <p>地址：北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340</p>
       <div class="sjxx-hr"></div>
       <p>营业时间：10：00-20：30</p>
     </div>


     <div class="shopcar">
                         <div class="shopcar-right">
                           <span v-if="parseFloat(seller.minPrice)-parseFloat($store.state.maxmon)>0">
                           ￥{{seller.minPrice}}元起送</span>
                           <span style="background-color:green" v-else>结算</span>
                         </div>
                         <div class="shop">
                           <p v-show="shopcar==false"><img src="../assets/shop1.png"></p>
                           <p v-show="shopcar==true" @click="opencar">
                           <img src="../assets/shop2.png"> <span>{{$store.state.maxcount}}</span>
                           </p>
                         </div>
                         <div class="shopcar-left">
                         <span class="icon">￥{{$store.state.maxmon}}</span>
                           <span class="icon">另需配送费￥{{seller.deliveryPrice}}元</span>
                         </div>
                       </div>
   </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
   export default{
      data(){
                   return{
                     seller:{},//获得商家信息
                    goods:{},//获得商品信息
                    show:0,//菜单点击变白色
                    mask:false,//调整购物车是否显示
                    shopcar:false,//购物车图片切换
                    arr:[],//选购的商品
                    btn:false//结算和差价
                   }
                 },
                  opencar:function(){//打开购物车
                              this.mask=true
                            },
                            closecar:function(){
                              this.mask=false
                            },
                            //购物车添加
                            add1:function(index){
                              var name=this.arr[index].name;
                               var old=this.goods;
                               for(var i=0;i<old.length;i++){
                                 for(var j=0;j<old[i].foods.length;j++){
                                   if(old[i].foods[j].name==name){
                                     old[i].foods[j].count+=1;
                                     break;
                                   }
                                 }
                               }
                           this.goods=old;
                           this.arr[index].count++;
                           this.$store.commit('add',this.arr)
                            },
                            //购物车删除
                            del1:function(index){
                               var name=this.arr[index].name;
                               var old=this.goods;
                               for(var i=0;i<old.length;i++){
                                  for(var j=0;j<old[i].foods.length;j++){
                                     if(old[i].foods[j].name==name){
                                         old[i].foods[j].count--;
                                         break;
                                     }
                                  }
                                }
                                this.goods=old;
                                this.arr[index].count--;
                                if(this.arr[index].count<=0){this.arr.splice(index,1)}
                                if(this.arr.length==0){
                                  this.shopcar=false;
                                  this.mask=false
                                }
                                this.$store.commit('add',this.arr)

                            },
                            //清空购物车
                            clear:function(){
                              this.shopcar=false;
                              this.mask=false;
                              this.arr=[];
                              var old=this.goods;
                              for(var i=0;i<old.length;i++){
                                for(var j=0;j<old[i].foods.length;j++){
                                  old[i].foods[j].count=0;
                                }
                              }
                              this.goodsgoods=old;
                              this.$store.commit('add',this.arr)
                            }

   }
</script>

<style scoped>
  .zpxf{
    margin:36px;
    overflow:hidden;
  }
  .zpxf .zpxf-left{
    float:left;
    margin-left:36px;
  }
  .zpxf .zpxf-left h2{
    font-size:28px;
    color:rgb(7,17,27);
    line-height:28px;
  }
  .zpxf .zpxf-left p{
    margin-top:16px;
  }
  .zpxf .zpxf-left p span{
    margin-left:16px;
  }
  .zpxf .zpxf-left p span:nth-child(2){
    font-size:20px;
    color:rgb(77,85,93);
    line-height:36px;
    margin-left:24px;
  }
  .zpxf .zpxf-right{
    float:right;
     margin-right:36px;
  }
  .zpxf .zpxf-right img{
    font-size:48px;
    color:rgb(240,20,20);
    line-height:48px;
    margin-left:12px;
  }
  .zpxf .zpxf-right p{
    font-size:20px;
    color:rgb(77,85,93);
    line-height:20px;
    margin-top:8px;
  }
  .zpxf .hr{
    height:1px;
    background-color:rgba(7,17,27,0.1);
    margin-top:100px;
  }
  .qsp{
    margin:36px;
    overflow:hidden;
  }
  .qsp div{
    float:left;
    margin-left:10%;
  }
  .qsp div .top{
     font-size:20px;
     color:rgb(147,153,159);
     line-height:20px;
  }
  .qsp div .bottom{
    font-size:48px;
    font-weight:200;
    color:rgb(7,17,27);
    line-height:48px;
    margin-top:8px;
  }
  .qsp .qsp-hr{
    width:2px;
    height:100px;
    background-color:rgba(7,17,27,0.1);
  }
  .fgf{
    height:32px;
    background-color:#F3F5F7;
    border-top:1px solid #E6E7E8;
    border-bottom:1px solid #E6E7E8;
  }
  .gghd{
    padding:36px;
    margin-left:36px;
  }
  .gghd h2{
    font-size:28px;
    color:rgb(7,17,27);
    line-height:28px;
  }
  .gghd p{
    font-size:24px;
    font-weight:200;
    color:rgb(240,20,20);
    line-height:48px;
    margin:16px 24px 32px;
  }
  .gghd-hr{
    height:1px;
    background-color:rgba(7,17,27,0.1);
  }
  .yh{
    padding:0px 36px 36px;
  }
  .yh .yh-box{
    margin:32px;
    overflow:hidden;
  }
  .yh .yh-box img{
    float:left;
    width:32px;
    height:32px;
  }
  .yh .yh-box p{
    float:left;
     font-size:24px;
     font-weight:200;
     color:rgb(7,17,27);
     line-height:32px;
     margin-left:12px;
  }
  .yh .yh-hr{
    height:1px;
    background-color:rgba(7,17,27,0.1);
  }
  .sjxx{
    padding:36px;
    margin-left:36px;
  }
  .sjxx h2{
    font-size:28px;
    color:rgb(7,17,27);
    line-height:28px;
  }
  .sjxx p{
    font-size:24px;
    font-weight:200;
    color:rgb(7,17,27);
    line-height:32px;
    margin:32px 24px;
  }
  .sjxx .sjxx-hr{
    height:1px;
    background-color:rgba(7,17,27,0.1);
    margin-top:30px;
  }
  .sjsj{
    padding:36px;
    margin-left:36px;
  }
  .sjsj h2{
    font-size:28px;
    color:rgb(7,17,27);
    line-height:28px;
  }
  .sjsj{
    overflow:hidden;
  }
  .sjsj img{
    width:240px;
    height:180px;
    float:left;
    margin-top:24px;
    margin-left:12px;
  }
  .shopcar{
           background-color:#333;
           color:#ccc;
           font-size:24px;
           height:116px;
           position:fixed;
           bottom:0px;
           left:0px;
           width:100%;
        }
        .shop,.shop img{
          width:128px;
          height:128px;
          vertical-align:top;
          margin-top:-16px;
        }
        .shop{
          margin:0px 36px;
          float:left;
        }
        .shopcar-right{
          float:right;
          width:210px;
          background-color:#666;
          font-size:32px;
          font-weight:900;
          height:116px;
          text-align:center;
          line-height:116px;
        }
        .shopcar-left{
          float:left;
          line-height:116px;
        }
        .shopcar-left span{
          display:inline-block;
        }
        .shopcar-left span:nth-child(1){
           font-size:32px;
           font-weight:900;
           border-tight:1px solid rgba(255,255,255,0.1);
        }
</style>
