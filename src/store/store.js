/**
 * Created by gm229 on 2020/4/22.
 */
//导入模块
//导入模块
import Vue from "vue"
import Vuex from "vuex"
//启动vuex
Vue.use(Vuex);
var store=new Vuex.Store({
  state:{
    maxcount:0,//总个数
    maxmon:0,//总价格
    car:[],//购物车的商品数

  },
  mutations:{
    add(state,arr){//更新数据的内容
  state.maxcount=++state.maxcount
  state.car=arr;
  var sum=0;
  var count=0;
  for(var i=0;i<state.car.length;i++){
    sum+=parseFloat(state.car[i].mon)*parseFloat(state.car[i].count);
    count+=state.car[i].count
  }
  state.maxmon=sum;
  state.maxcount=count;
}
}
})
export default store
