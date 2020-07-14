<template>
   <div class="header">
      <div class="background">
        <img :src="seller.avatar" width="100%" height="100%">
      </div>
      <div class="wrapper" @click="showDetail">
        <div class="content-wrapper">
           <div class="logo"> <img :src="seller.avatar"> </div>
           <div class="title">
             <p class="seller-name">
               <img src="./header/brand@2x.png">
               <span>{{seller.name}}</span>
             </p>
             <p  class="description">
               {{seller.description}}/{{seller.deliveryTime}}分钟送达
             </p>
             <p class="support" v-if="seller.supports&&show==false">
               <img src="./header/decrease_1@2x.png">
               <span>{{seller.supports[0].description}}</span>
             </p>
             <div class="support-count" v-if="seller.supports&&show==false">
               <span>{{seller.supports.length}}</span>
               <span> &gt; </span>
             </div>
           </div>
        </div>
        <div class="bulletin" v-show="show==false">
          <img src="./header/bulletin@2x.png">
          <span>{{seller.bulletin}}</span>
        </div>
      </div>
      <div class="detail" v-show="show">
        <div class="detail-wrapper">
          <div class="text">优惠信息</div>
          <ul v-for="item in seller.supports" :key="item.type">
            <li>{{item.description}}</li>
          </ul>
        </div>
        <div class="detail-wrapper">
        <div class="text">商家信息</div>
          <span>{{seller.bulletin}}</span>
        </div>
      </div>
   </div>

</template>

<script>
import axios from 'axios'
   export default{
    name:"header1",
    data(){
      return{
        seller:{},//获得商家信息
        show:false,//详情div的显示隐藏
      }
    },
    mounted:function(){
      var th=this;
       axios.get('/static/data.json')
       .then(function(res){
         console.log(res.data);
         th.seller=res.data.seller
       })
    },
    methods:{
      showDetail:function(){
        this.show=!this.show
      }
    }
   }
</script>

<style scoped>
   .header{
        color:white;
        position:relative;
        overflow:hidden;
        background-color:rgba(0,0,0,0.7);
      }
      .background{
        position:absolute;
        top:0px;
        left:0px;
        z-index:-1;
        width:100px;
        height:100%;
        filter:blur(10px);
      }
   .content-wrapper{
     margin:0px auto;
     width:80%;
     position:relative;
     padding:48px;
     overflow:hidden;
   }
   .logo img{
     width:128px;
     height:128px;
     border-radius:4px;
     vertical-align:top;
     margin-right:36px;
   }
   .logo,.title{
     float:left;

   }
   .title p{
     overflow:hidden;
   }
    .title p img{
     float:left;
    }
    .seller-name{
      font-size:32px;
      line-height:36px;
      font-weight:bold;
      padding:4px 0px 32px 0px;
    }
    .description{
      font-size:24px;
       line-height:24px;
    }
    .support{
      font-size:20px;
      line-height:20px;
      margin:20px 0px;
    }
    .seller-name img{
      margin-right:12px;
    }
    .support img{
      margin-right:8px;
    }
    .support-count{
      position:absolute;
      right:24px;
      bottom:16px;
      padding:14px;
      line-height:24px;
      border-radius:16px;
      background-color:rgba(0,0,0,0.2);
      font-size:20px;
      text-align:center;
    }
    .bulletin{
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      padding:28px;
      background-color:rgba(0,0,0,0.2);
    }
    .bulletin img{
      vertical-align:top;
    }
    .bulletin span{
      font-size:20px;
      margin:2px 8px;

    }
    .detail{
      padding:72px;
       font-size:24px;
    }
    .detail-wrapper .text{
      font-size:28px;
      text-align:center;
      margin:48px 0px;
    }
    .detail-wrapper ul li{
      text-align:center;
      margin:24px 0px;
    }
     .detail-wrapper span{
       line-height:48px;
     }
</style>
