<template>
  <div id="type1">
    <h2>{{msg}}</h2>
    <h2>{{$route.params.id}}-{{$route.params.title}}</h2>
  </div>
</template>
<script>
  export default{
      name:'type1',
      data(){
          return{
              msg:'I am type1'
          }
      }
  }
</script>
<style></style>
