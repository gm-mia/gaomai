<template>
  <div id="app">
    <header1></header1>
    <div class="tab">
       <div class="tab-item">
           <router-link tag="a" to="/foods" active-class="link">商品</router-link>
       </div>
       <div class="tab-item">
            <router-link tag="a" to="/assess" active-class="link">评论</router-link>
        </div>
       <div class="tab-item">
            <router-link tag="a" to="/store" active-class="link">商家</router-link>
       </div>

    </div>
    <router-view keep-active/>
     <footer1></footer1>
  </div>
</template>

<script>
import header1 from "./components/header";
import footer1 from "./components/footer";
import axios from 'axios';
export default {
  name: 'App',
  components:{header1,footer1}
}
</script>

<style>
@import url("../static/reset.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   width:100%;
   main-width:1000px;
  color: #2c3e50;
  margin:0px auto;
}
.tab{
  display:flex;
  width:100%;
  height:80px;
  line-height:80px;
  border-bottom:1px solid rgba(7,17,27,0.1);
}
.tab .tab-item{
  flex:1;
  text-align:center;
  font-size:28px;
}
.link{
  color:red;
}
</style>
