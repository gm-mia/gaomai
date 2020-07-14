<template>
   <div class="assess">
     <div class="zhpf">
       <div zhpf-hr></div>
       <div class="zhpf-left">
         <h1>3.9</h1>
         <h3>综合评分</h3>
         <p>高于周边商家69.2%</p>
       </div>
       <div class="zhpf-center"></div>
       <div class="zhpf-right">
         <div>
           <h3>服务态度</h3>
           <p><img src="./star/star36_on@2x.png"/>
              <img src="./star/star36_on@2x.png"/>
              <img src="./star/star36_on@2x.png"/>
              <img src="./star/star36_on@2x.png"/>
              <img src="./star/star36_off@2x.png"/>
            <span>3.9</span></p>
         </div>
         <div>
           <h3>服务态度</h3>
           <p><img src="./star/star36_on@2x.png"/>
              <img src="./star/star36_on@2x.png"/>
              <img src="./star/star36_on@2x.png"/>
              <img src="./star/star36_on@2x.png"/>
              <img src="./star/star36_off@2x.png"/> <span>4.0</span></p>
         </div>
         <div>
            <h3>送达时间</h3>
            <span>44分钟</span>
         </div>
       </div>
     </div>
     <div class="fgf"></div>
     <div class="pj-nav">
       <p class="qb">全部<span>57</span></p>
       <p class="my">满意<span>47</span></p>
       <p class="bmy">不满意<span>10</span></p>
       <div>
         <hr></hr>
         <p class="zk"><img src="../assets/duihao.jpg"><span>只看有内容的评价</span></p>
         <hr></hr>
       </div>
     </div>
     <div class="ph-nr">
       <div class="ph-nr1">
         <img src="../assets/tx3.jpg" width="50px" height="50px" marginLeft="36px">
       </div>
       <div class="ph-nrr">
         <p class="nrr-name">聚***家<span>2016-07-13 20:33</span></p>
         <p class="nrr-sd">
           <img src="./star/star36_on@2x.png"/>
           <img src="./star/star36_on@2x.png"/>
           <img src="./star/star36_on@2x.png"/>
           <img src="./star/star36_on@2x.png"/>
           <img src="./star/star36_off@2x.png"/>
           <span>30分钟送达</span></p>
         <p class="nrr-box">油条凉了，而且没有酱。75分钟才到。很慢。送餐员态度不错，但毕竟好晚了呀.我要求18点45送达，结果提前了45分钟，家里没人。</p>
         <div class="nrr-pl">
           <img src="../assets/zan.jpg">
           <p>大王香菇卤...</p>
           <p>大王香菇卤...</p>
           <p>大王香菇卤...</p>
         </div>
        <hr></hr>
       </div>
     </div>




     <div class="ph-nr">
            <div class="ph-nr1">
              <img src="../assets/tx3.jpg" width="50px" height="50px">
            </div>
            <div class="ph-nrr">
              <p class="nrr-name">聚***家<span>2016-07-13 20:33</span></p>
              <p class="nrr-sd">
                <img src="./star/star36_on@2x.png"/>
                <img src="./star/star36_on@2x.png"/>
                <img src="./star/star36_on@2x.png"/>
                <img src="./star/star36_on@2x.png"/>
                <img src="./star/star36_off@2x.png"/>
                <span>60分钟送达</span></p>
              <p class="nrr-box">这次太慢了，下次希望能直接和客户沟通而不是我一次次打电话问，但快递师傅态度很好。我要求18点45送达，
              结果提前了45分钟，家里没人。</p>
              <div class="nrr-pl">
                <img src="../assets/cai.jpg">
                <p>大王香菇卤...</p>
              </div>
             <hr></hr>
            </div>
          </div>
           <div class="ph-nr">
             <div class="ph-nr1">
               <img src="../assets/tx3.jpg" width="50px" height="50px">
             </div>
             <div class="ph-nrr">
               <p class="nrr-name">聚***家<span>2016-07-13 20:33</span></p>
               <p class="nrr-sd">
                 <img src="./star/star36_on@2x.png"/>
                 <img src="./star/star36_off@2x.png"/>
                 <img src="./star/star36_off@2x.png"/>
                 <img src="./star/star36_off@2x.png"/>
                 <img src="./star/star36_off@2x.png"/>
                 <span>40分钟送达</span></p>
               <p class="nrr-box">我要求18点45送达，结果提前了45分钟，家里没人。这次太慢了，
               下次希望能直接和客户沟通而不是我一次次打电话问，但快递师傅态度很好。</p>
             </div>
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
  .zhpf{
    overflow:hidden;
  }
  .zhpf .zhpf-left{
    width:275px;
    padding:36px 48px;
    float:left;
  }
  .zhpf .zhpf-left h1{
    font-size:48px;
    color:rgb(255,153,0);
    line-heigh:56px;
    text-align:center;
  }
  .zhpf .zhpf-left h3{
    font-size:24px;
    color:rgb(7,17,27);
    line-heigh:24px;
    text-align:center;
    margin-top:12px;
  }
  .zhpf .zhpf-left p{
    font-size:20px;
    color:rgb(147,153,159);
    line-heigh:20px;
    text-align:center;
    margin-top:16px;
  }
  .zhpf .zhpf-center{
    background-color:#ccc;
    height:100px;
    weight:1px;
    float:left;
  }
  .zhpf .zhpf-right{
    padding:10px 48px;

  }
  .zhpf .zhpf-right div{
    overflow:hidden;
    margin-top:16px;
  }
  .zhpf .zhpf-right div h3{
    font-size:24px;
    color:rgb(7,17,27);
    line-heigh:36px;
    float:left;
  }
  .zhpf .zhpf-right div p{
    float:left;
    margin-left:24px;
  }
  .zhpf .zhpf-right div p span{
    margin-left:24px;
    font-size:24px;
    color:rgb(255,153,0);
    line-height:36px;
    margin-top:-10px;
  }
  .zhpf .zhpf-right div>span{
     font-size:24px;
     color:rgb(147,153,159);
     line-height:36px;
     margin-left:24px;
  }
  .pj-nav{
   position:relative;
   padding:36px;
   margin-top:36px;
  }
  .pj-nav .qb,.my,.bmy{
    position:absolute;
    top:0px;
    left:36px;
    padding:10px;
    border-radius: 2px;
  }
  .pj-nav .qb{
    background-color:#00A0DC;
  }
  .pj-nav .my{
    left:136px;
    background-color:#CCECF8;
  }
  .pj-nav .bmy{
    left:236px;
    background-color:#E9EBEC;
  }
  .pj-nav div{
    margin-top:20px;
  }
  .pj-nav div hr{
    color:#EFF0F0;
  }
  .pj-nav div .zk{
    color:#B3B7BB;
    font-size:24px;
    line-height:24px;
    margin:36px 0px;
  }
  .pj-nav div .zk img{
    margin-right:10px;
  }
  .ph-nr{
    position:relative;
    padding:36px;
    margin-bottom:180px;
  }
  .ph-nr .ph-nrl{
    position:absolute;
    top:36px;
  }
  .ph-nr .ph-nrr{
    position:absolute;
    top:0px;
    left:136px;
    margin:36px;
  }
  .ph-nr .ph-nrr .nrr-name{
    overflow:hidden;
    font-size:20px;
    color:rgb(7,17,27);
    line-height:24px;
  }
  .ph-nr .ph-nrr .nrr-name span{
    float:right;
    font-size:20px;
    font-weight:200;
    color:rgb(147,153,159);
    line-height:24px;
  }
  .ph-nr .ph-nrr .nrr-sd{
    margin-top:8px;
  }
  .ph-nr .ph-nrr .nrr-sd span{
    font-size:20px;
    font-weight:200;
    color:rgb(147,153,159);
    line-height:24px;
    margin-left:12px;
  }
  .ph-nr .ph-nrr .nrr-box{
    font-size:24px;
    color:rgb(7,17,27);
    line-height:36px;
    margin-top:12px;
  }
  .ph-nr .ph-nrr .nrr-pl{
    overflow:hidden;
    margin-top:16px;
  }
  .ph-nr .ph-nrr .nrr-pl img{
    float:left;
  }
  .ph-nr .ph-nrr .nrr-pl p{
    border:1px #E6E7E8 solid;
    float:left;
    margin-left:12px;
    padding:5px;
  }
  .ph-nrr hr{
    margin-left:-150px;
    margin-top:30px;
    color:#F0F0F1;
  }
   .fgf{
      height:32px;
      background-color:#F3F5F7;
      border-top:1px solid #E6E7E8;
      border-bottom:1px solid #E6E7E8;
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
