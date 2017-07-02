<template>
  <div id="box">
    <!-- v-pre 为了显示初始的值-->
    <div v-pre>{{name}}</div>
    <hr>
    <div v-cloak>{{hobby}}</div>
    <hr>
    <div v-once>{{age}}</div><br>
    <input type="text" v-model="age"/><br>
    {{age}}
  </div>
</template>
<script>
  export default{
      data(){
          return{
            name:'jack',
            hobby:'film',
            age:'18',
            msg:'msg',
          }
      }
  }
</script>
<style>
  [v-cloak]{
    display: none;
  }
</style>
