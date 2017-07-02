<template>
  <div id="box">
    {{arrKey.color}}-{{arrKey.size}}
    <p><input type="radio" id="blue" value="蓝色" v-model="arrKey.color" /><label for="blue">蓝色</label> <input type="radio" id="yellow" value="黄色" v-model="arrKey.color" /><label for="yellow">黄色</label></p>
    <p><input type="radio" id="big" value="大" v-model="arrKey.size" /><label for="big">大</label> <input type="radio" id="small" value="小" v-model="arrKey.size" /><label for="small">小</label></p>
    <p><input type="checkbox" id="name" value="姓名" v-model="arrInfo" /><label for="name">姓名</label> <input type="checkbox" id="性别" value="男" v-model="arrInfo" /><label for="sex">男</label></p>
    {{arrInfo}}
    <hr>
    <input v-model="msg" :class="input"/><br>
    <!--lazy是监听change事件，当输入框失去焦点的时候，才进行赋值，页面展示的才发生变化-->
    <input v-model.lazy="msg" :class="input"/><br>
    <!--number为了输入数字，假如一开写的是数字，后面输入别的内容的时候，就不会添加进去，要是一开始输入是别的,后面就没什么影响了-->
    <input v-model.number="msg" :class="input"/><br>
    <!--trim是为了去除输入的前后空格-->
    <input v-model.trim="msg" :class="input"/><br>
    {{msg}}
  </div>
</template>
<script>
  export default{
      data(){
          return{
            msg:'msg',
            arrKey:{ color:'蓝色',
              size:'大'},
            arrInfo:[],
            input:"input"

          }
      }
  }
</script>
<style>
  .input{margin-bottom: 10px;}
</style>
