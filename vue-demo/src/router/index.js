import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Count from '@/components/count'
import Count1 from '@/components/count1'
import Count2 from '@/components/count2'
import Home from '@/components/home'
import Home1 from '@/components/home1'
import Home2 from '@/components/home2'
import Type1 from '@/components/type1'
import Error from '@/components/error'
import vFor from '@/components/v-for'

require("../../node_modules/bootstrap/dist/css/bootstrap.min.css");

Vue.use(Router);

export default new Router({
  // mode:'history', 使用这样是为了把url中#去掉，跟正常的url访问是一样的
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
      // children:[{path:'About',name:'About',component:About}]
    },
    {path:'/',name:'About',component:About},
    //路由中参数传递，参数如果有正则匹配的话，直接在后面加上括号，并在里面写上参数
    //alias为请求路径中的别名，当以另一种方式进行请求时，也可以访问到的
    {
      path:'/count',
      name:'Count',
      component:Count,
      children:[
        {
          path:'/count1',
          name:'count/Count1',
          component:Count1,
          alias:'lizj'
        },
        {
          path:'/count2',
          name:'Count2',
          component:Count2,
          beforeEnter:(to,from,next)=>{
            console.log(to,46);
            console.log(from,47);
            next();
          }
        },
        {
          path:'/goHome',
          redirect:'/count'
        },
        {
          path:'*',
          name:'Error',
          component:Error
        }
        ]
    },
    // {path:'/count',name:'Count',component:Count,children:[{path:'count1',name:'count/Count1',component:Count1},{path:'count2',name:'Count2',component:Count2,redirect:'count2'},{path:'type1/:id(\\d+)/:title',name:'Type1',component:Type1}]},
    {
      path:'/home',
      name:'Home',
      components:{
        default:Home,
        left:Home1,
        right:Home2,
      },
      },
    {
      path:'/vFor',
      name:'vFor',
      component:vFor
    }
    //{
    //  path: '/',
    //  name: 'About',
    //  component: About
    //}
  ]
})
