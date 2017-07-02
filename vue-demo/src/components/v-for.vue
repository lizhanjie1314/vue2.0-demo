<template>
  <div id="list">
    <ul>
      <li v-for="item in arrInfoSort">{{item.name}}-{{item.age}}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="item in arrNumSort">{{item}}</li>
    </ul>
  </div>
</template>
<script>
  export default({
      name:'list',
      data(){
          return {
            msg:'hello',
            arrNum:[88,77,99,66,5,9,18,36],
            arrInfo:[
              {name:'testOne',age:18},
              {name:'testTwo',age:20},
              {name:'testTen',age:80},
              {name:'testTwoZero',age:90},
              {name:'testThree',age:15}
            ]
          }
      },
    computed:{
      arrNumSort:function () {
        return this.arrNum.sort(this.sort)
      },
      arrInfoSort:function () {
        return this.sortArr(this.arrInfo,'age')
      }
    },
    methods:{
      sortNum:(a,b) => {
          return a-b
      },
      sortArr:(arr,key)=>{
          return arr.sort(function (a,b) {
            var x=a[key];
            var y=b[key];
            return ((x<y)?-1:((x>y)?1:0))
          })
     }
    }
  })
</script>
<style></style>
