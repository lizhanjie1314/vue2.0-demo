/**
 * Created by Administrator on 2017/5/16.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store=new Vuex.Store({
  //状态
  state:{
    count:3,
    allState:10
  }
  ,
  //改变
  mutations:{
    add (state,num) {//接收变量
      state.count+=num;
    },
    reduce(state,num){
      state.count-=num;
    }
  },
  //异步修改状态
  actions:{
    addAction(context){
      context.commit('add',30);
    },
    reduceAction({commit}){
      commit('reduce',30);
    }
  }
})

export default store;
