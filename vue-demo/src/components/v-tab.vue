<template>
  <div id="box">
    <ul class="nav-tab clear">
      <li v-for="(item,index) in tabArr" @click="tabChange(index)" :class="index==flag?active:''">{{item}}</li>
    </ul>
    <div class="nav-content">
      <transition name="fade">
        <div v-show="flag==0">我是第一个NO1</div>
      </transition>
      <transition name="fade">
        <div v-show="flag==1">我是第二个NO2</div>
      </transition>
      <transition name="fade">
        <div v-show="flag==2">我是第三个NO3</div>
      </transition>

    </div>
  </div>
</template>
<script>
  export default{
      data(){
          return{
            tabArr:['购买对账','支付对账',"赎回对账"],
            msg:'我是选项卡',
            active:'active',
            index:'0',
            flag:0
          }
      },
    methods:{
      tabChange(index){
          this.flag=index;
//          alert(index);

      }
    }
  }
</script>
<style>
  html,body,div,ul,li{margin: 0;padding: 0;}
  ul,li{list-style: none;}
  .clear{zoom: 1;}
  .clear:after{display: block;content: "";clear: both;}

  #box{width: 500px;margin: 30px auto;}
  .nav-tab{background-color: #eee;}
  .nav-tab li{padding-right: 20px;padding-left: 20px;height: 36px;line-height:36px;float: left;cursor: pointer;}
  .nav-tab li.active{border: solid 1px blue;}
  .nav-content div{ height: 200px;line-height: 200px;border: solid 1px #ddd;}
  .fade-enter{
    opacity: 0;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-enter-active{
    transition: 1s;
  }
  .fade-leave-active{
    opacity: 0;
    transition: .5s;
  }
</style>
