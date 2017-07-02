<template>
  <div id="box">
    {{msg}}
    <div id="mySelf"></div>
    <p></p>
  </div>
</template>

<script>
  import Vue from 'vue'
  var SelfExtend=Vue.extend({
    template:"<p><a :herf='selUrl'>{{btnName}}</a></p>",
    data:function () {
      return{
        selUrl:'www.baidu.com',
        btnName:'百度一下'

      }
    }
  });
  new SelfExtend().$mount('#mySelf');
  new SelfExtend().$mount('p');
  export default{
      data(){
          return{
            msg:'我是扩展组件'
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
