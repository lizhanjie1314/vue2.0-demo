<template>
  <div>
    <h2>{{count}}</h2>
    <h2>{{allState}}</h2>
    <!--$store.commit('add',10) 中add为要执行的函数，10才是要是传递的参数-->
    <h3><button  @click="$store.commit('add',10)">+10</button><button @click="$store.commit('reduce',20)">-20</button></h3>
    <!--下面的是将方法add和reduce引入到页面中，上面的就可以直接使用了,括号内为要传递的参数-->
    <h3><button  @click="add(20)">+20</button><button @click="reduce(50)">-50</button></h3>
    <h3><button  @click="addAction">+30</button><button @click="reduceAction">-30</button></h3>
  </div>
</template>
<script>
  //引入store
  import store from '@/vuex/store'
  //引入mapState和mapMutations
  import { mapState,mapMutations,mapActions } from 'vuex'
  export default{
    name:'Count',
    data(){
        return{
            msg:'hello vuex'
        }
    },
    //计算属性，1、获取count值
//    computed:{
//        count(){
//            return this.$store.state.count
//        }
//    },
    //2、mapSate中的属性，对象
//    computed:mapState({
//      count:state=>state.count
//    }),
    //3、mapSate中的属性，中的数组
    computed:mapState(['count','allState']),
    methods:{
      ...mapMutations(['add','reduce']),
      ...mapActions(['addAction','reduceAction']),
    },
    store //引入store
  }
</script>
<style></style>
