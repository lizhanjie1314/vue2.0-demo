<template>
  <div id="count2">{{msg}}-{{$route.params.id}}-{{$route.name}}</div>
</template>
<script>
  export default({
    name:'count2',
    data(){
        return{
            msg:'我是NO2，第二个计算'
        }
    }
  })
</script>
<style></style>
