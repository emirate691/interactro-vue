import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue' 
import Register from '@/components/auth/Register.vue'
import Question from '@/views/Question.vue'
import EmailVerified from'@/views/EmailVerified.vue'
import Emailreset from'@/views/Emailreset.vue'
import EngagementType from'@/views/EngagementType.vue'
import QuizType from '@/views/QuizType.vue'
import Dashboard from '@/views/Dashboard.vue'
import Template from '@/views/Template.vue'
import Quizeditor from '@/views/Quizeditor.vue'
import UntitleQuiz from '@/views/UntitleQuiz.vue'

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
    path:'/question',
    name: 'question',
    component: Question
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
  },
  {
    path:'/engagementType',
    name: 'engagementType',
    component: EngagementType
  },

  {
    path:'/quizType',
    name: 'quizType',
    component: QuizType
  },
  
  {
    path:'/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path:'/template',
    name: 'template',
    component: Template
  },
  {
    path:'/quizeditor',
    name:'quizeditor',
    component: Quizeditor
  },
  {
    path:'/UntitleQuiz',
    name:'UntitleQuiz',
    components: UntitleQuiz
  }
 ]
  

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
