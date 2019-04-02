import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)
//引入组件
import Book from 'pages/Book.vue'
import Reg from 'components/common/reg/Reg.vue'
import Login from 'components/common/login/Login.vue'



const router = new VueRouter({
  routes: [
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/book',
      name: 'book',
      component: Book,
      children:[
        {
        path:'reg',
        name: 'reg',
        components:Reg
      },
      {
        path:'login',
        name: 'login',
        components:Login
      }
    ]
    },
    {
      path:'/',
      redirect:'/book'
    }
  ]
})
export default router