<template>

   <div class="foods">
       <div class="menu-wrapper">
         <ul class="menu-item">
           <li v-for="(item,index) in goods" :key="item.name"
           :class="{'list':show==index}" @click="showclass(index)">
             <p>{{item.name}}</p>
           </li>
         </ul>
       </div>
       <div class="foods-wrapper">
         <div class="foods-item" v-for="(item,index) in goods" :key="item.name">
           <h1>{{item.name}}</h1>
           <ul class="food-item">
             <li v-for="(food,i) in item.foods" :key="food.name">
               <div class="food-box">
                 <img :src="food.icon">
                 <div>
                   <h2>{{food.name}}</h2>
                   <p></p>
                   <p class="extra">
                     <span>月售{{food.sellCount}}份</span>
                     <span>好评率{{food.rating}}%</span>
                     <div class="mon">
                       <p class="price">
                          <span class="pic">￥{{food.price}} </span>
                          <span v-if="food.oldPrice">{{'￥'+food.oldPrice}} </span>
                        </p>
                        <p class="count">
                           <img src="../assets/jian.jpg" class="jian" v-if="typeof food.count!='undefined'&&food.count>0"
                           @click="del(index,i)">
                           <span v-if="typeof food.count!='undefined'&&food.count>0">{{food.count}}</span>
                           <img src="../assets/jia.jpg" class="jia" @click="add(index,i)">
                         </p>
                     </div>
                   </p>
                  </div>
               </div>
             </li>
           </ul>
         </div>
       </div>
       <div class="mask" v-show="mask" @click.self="closecar">
         <div class="goods">
           <h1>购物车 <span @click="clear">清空</span></h1>
           <div class="mon-wrap" v-for="(item,index) in $store.state.car" :key="item.name">
             <div class="mon">
               <p class="price">{{item.name}}</p>
               <p class="count">
               <span class="pic">￥{{item.mon}}</span>
                 <img src="../assets/jian.jpg" @click="del1(index)">
                 <span>{{item.count}}</span>
                 <img src="../assets/jia.jpg" @click="add1(index)">
               </p>
             </div>
           </div>
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
         mounted:function(){
           var th=this;
            axios.get('/static/data.json')
            .then(function(res){
              console.log(res.data);
              th.seller=res.data.seller;
              th.goods=res.data.goods
            })
         },
         methods:{
           showclass:function(index){//被电击菜单变白色
             this.show=index;
             var div=document.querySelector(".foods-wrapper");
             var child=document.querySelectorAll(".foods-item");
             var sum=0;
             for(var i=0;i<index;i++){
               sum+=child[i].offsetHeight;
             }
             div.scrollTop=sum;
           },
           add:function(index,i){//添加商品
             var old=this.goods[index];
             if(this.shopcar==false){
               this.shopcar=true
             }
             if(!old.foods[i].count){
               old.foods[i].count=1
             }
             else{
               old.foods[i].count++
             }
             var food={name:old.foods[i].name,
                       mon:old.foods[i].price,
                       count:old.foods[i].count
                       }
             var flg=false;
             for(var j=0;j<this.arr.length;j++){
               if(this.arr[j].name==food.name){
                 flg=true;
                 this.arr[j].count=food.count;
                 Vue.set(this.arr,j,this.arr[j])
               }
             }
             if(flg==false){
               this.arr.push(food)
             }
             flg=false;
             Vue.set(this.goods,index,old)
            this.$store.commit('add',this.arr)
           },
           del:function(index,i){//删除商品
             var old=this.goods[index]
              if(old.foods[i].count){
                old.foods[i].count--
              }
              Vue.set(this.goods,index,old)
              for(var j=0;j<this.arr.length;j++){
                if(this.arr[j].name==this.goods[index].foods[i].name){
                    this.arr[j].count=this.goods[index].foods[i].count
                    Vue.set(this.arr,j,this.arr[j])
                    if(this.arr[j].count<1){
                      this.arr.splice(j,1)
                    }
                  }
               }
               if(this.arr.length==0){
                  this.shopcar=false
               }
               this.$store.commit('add',this.arr)
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
   }
</script>

<style scoped>
  .foods{
    overflow:hidden;
    position:relative;
  }
  .menu-wrapper{
    float:left;
    overflow:auto;
    width:160px;
    height:700px;
  }
  .menu-wrapper ul{
    background-color:#f3f5f7;
    width:100%;
  }
  .menu-wrapper ul li{
    font-size:24px;
    color:rgb(58,57,57);
    text-align:center;
    line-height:28px;
    padding:54px 24px;
    position:relative;
  }
  .menu-wrapper ul li:after{
    content:"";
    display:block;
    position:absolute;
    width:112px;
    bottom:0px;
    left:50%;
    margin-lift:-56px;
    border:1px solid rgba(7,17,27,0.1);
  }
  .list{
    background-color:white;
  }
  .foods-wrapper{
    background-color:#f3f5f7;
    margin-left:160px;
    overflow:auto;
    height:700px;
  }
  .foods-item>h1{
    font-size:24px;
    color:rgb(115,117,116);
    position:relative;
    height:52px;
    line-height:52px;
    padding-left:28px;
  }
  .foods-item>h1::before{
    content:"";
        display:block;
        position:absolute;
        width:5px;
        height:100%;
        top:0px;
        bottom:0px;
        left:0px;
        margin-lift:-56px;
       background-color:#d9dde1;
  }
  .foods-item ul{
    background-color:white;
  }
  .foods-item ul li{
    padding:0px 36px;
    position:relative;
  }
  .food-box>img{
    width:128px;
    height:128px;
    float:left;
    margin-right:48px;
  }
  .food-box{
    overflow:hidden;
    border-bottom:1px solid rgba(7,17,27,0.1);
    padding:36px 0px;
  }
  .food-box div{
    margin-left:48px;
    font-size:20px;
    color:#999;
  }
  .food-box div h2{
    font-size:28px;
    color:#000;
    line-height:28px;
    padding-top:4px;
  }
  .food-box div p{
    padding:6px 0px;
  }
  .food-box div p span{
    margin-right:24px;
  }
  .mon,.count{
     overflow:hidden;
  }
  .price{
    float:left;
  }
  .count{
    float:right;
  }
  .pic{
    color:red;
    font-size:28px;
    font-weight:900;
  }
  .count img{
    width:50px;
    visibility:top;
    float:left;
  }
  .count span{
    float:left;
    display:block;
    font-size:20px;
    line-height:50px;
    height:50px;
    margin:0px 24px;
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
  .mask{
    position:fixed;
    width:100%;
    margin:0px auto;
    top:0px;
    height:100%;
    background-color:rgba(7,17,27,0.6);
  }
  .goods{
     position:absolute;
     bottom:120px;
     left:0px;
     width:100%;
     background-color:white;
  }
  .goods h1{
    background-color:#f3f5f7;
    height:80px;
    line-height:80px;
    padding:0px 36px;
    border-bottom:1px solid rgba(7,17,27,0.1);
    font-size:28px;
  }
  .goods h1 span{
    float:right;
    font-size:24px;
    color:rgb(0,160,220);
  }
  .mon-wrap .mon{
    height:96px;
    line-height:96px;
    margin:0px 36px;
    overflow:hidden;
    border-bottom:1px solid rgba(7,17,27,0.1);
  }
  .mon-wrap .mon .price{
    font-size:28px;
  }
  .mon-wrap .mon .count{
    margin:24px 0px;
  }
  .mon-wrap{
    max-wrap:500px;
    overflow:auto;
  }
  .shop p:nth-child(2){
    position:relative;
  }
  .shop p:nth-child(2) span{
    position:absolute;
    background-color:red;
    color:white;
    font-size:18px;
    font-weight:900;
    top:-20px;
    left:80px;
    padding:12px;
    border-radius:50%;
  }
</style>
