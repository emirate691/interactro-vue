import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue' 
import Register from '@/components/auth/Register.vue'
import Login from '@/components/auth/Login.vue'
import EmailVerified from'@/views/EmailVerified.vue'
import Emailreset from'@/views/Emailreset.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path:'/register',
    name: 'register',
    component: Register
  },
  {
    path:'/login',
    name: 'login',
    component: Login
  },
  {
    path:'/emailVerified',
    name: 'emailVerified',
    component: EmailVerified
  },
  {
    path:'/emailreset',
    name: 'emailreset',
    component: Emailreset
  }
  
 
   
   
]
  

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
