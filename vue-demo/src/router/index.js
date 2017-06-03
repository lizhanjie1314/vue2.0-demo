import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Count from '@/components/count'

require("../../node_modules/bootstrap/dist/css/bootstrap.min.css");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
      // children:[{path:'About',name:'About',component:About}]
    },
    {path:'/',name:'About',component:About},
    {path:'/count',name:'Count',component:Count}
    //{
    //  path: '/',
    //  name: 'About',
    //  component: About
    //}
  ]
})
