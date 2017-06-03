<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="About"></router-view>
    <!--<router-view name="Count"></router-view>-->
    <!--<router-link to="Count">点击</router-link>-->
  </div>
</template>
<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
