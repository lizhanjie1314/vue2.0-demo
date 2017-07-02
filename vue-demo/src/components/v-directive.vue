<template>
  <div id="box">
    {{msg}}<br>
    <p v-mySelf="color">{{num}}</p>
    <button @click="add()">Add</button><br>
    <button @click="unbindSelf()">解绑</button>
  </div>
</template>
<script>
  import Vue from 'vue'
  Vue.directive('mySelf',{
    bind:function (el,binding) {
      el.style="color:"+binding.value;
      console.log("1+bind");
    },
    inserted:function () {
      console.log("2+inserted");

    },
    update:function () {
      console.log("3+update");

    },
    componentUpdated:function () {
      console.log("4+componentUpdated");
    },
    unbind:function () {
      console.log("5+unbind");
    }

  });
  export default{
      data(){
          return{
            msg:'我是自定义指令',
            num:'10',
            color:'blue'
          }
      },
    methods:{
          add(){
              this.num++;
          },
      unbindSelf(){
        this.$destroy()
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
</style>
