<template>
  <div id="count1">{{msg}}-{{$route.params.id}}-{{$route.name}}</div>
</template>
<script>
  export default({
//    name:'count1',
    beforeRouteEnter:(to,from,next)=>{
        console.log(to,8);
        console.log(from,9);
        next();
    },
    beforeRouteLeave:(to,from,next)=>{
      console.log(to,13);
      console.log(from,14);
      next();
    },
    data(){
        return{
            msg:'我是NO1，第一个计算'
        }
    }
  })
</script>
<style></style>
