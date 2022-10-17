import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue' 
//import Register from '@/components/auth/Register.vue'
//import PasswordRecovery from '@/components/auth/PasswordRecovery.vue'
import Question from '@/views/Question.vue'
import EmailVerified from'@/views/EmailVerified.vue'
import Emailreset from'@/views/Emailreset.vue'
import EngagementType from'@/views/EngagementType.vue'
import QuizType from '@/views/QuizType.vue'
import Dashboard from '@/views/Dashboard.vue'
import Template from '@/views/Template.vue'
import Quizeditor from '@/views/Quizeditor.vue'
import UntitleQuiz from '@/views/UntitleQuiz.vue'
import Polls from '@/views/Polls.vue'
import Giveaways from '@/views/Giveaways.vue'
import Result from '@/views/Result.vue'
import Branch from '@/components/Branch.vue'
import Giveaway from '@/components/Giveaway.vue'
//import Branches from '@/components/Branches.vue'
import Auth from '@/views/auth/index.vue' 
import AuthLogin from '@/views/auth/login.vue' 
import AuthRegister from '@/views/auth/register.vue' 
import AuthPasswordReset from '@/views/auth/passwordreset.vue' 

Vue.use(VueRouter)

const routes = [

  {
    path: '/auth',
    redirect: { name: 'auth.login' },
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'auth.login',
        component: AuthLogin,
      },
      {
        path: 'register',
        name: 'auth.register',
        component: AuthRegister,
      },
      {
        path: 'passwordreset',
        name: 'auth.passwordreset',
        component: AuthPasswordReset,
      },
    ]
  },

  {
    path: '/',
    name: 'home',
    component: Home,
  },
  /*{
    path:'/register',
    name: 'register',
    component: Register
  },*/
  {
    path:'/question',
    name: 'question',
    component: Question
  },
 /* {
    path: '/passwordrecovery',
    name: 'passwordrecovery',
    components: PasswordRecovery
  },*/
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
    path:'/branch',
    name:'branch',
    component:Branch
  },
  {
    path:'/polls',
    name:'polls',
    components:Polls
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
    path:'/untitleQuiz',
    name:'UntitleQuiz',
    components: UntitleQuiz
  },
 
  {
    path:'/giveaways',
    name:'giveaways',
    components:Giveaways
  },
  {
    path:'/result',
    name:"result",
    components:Result
  },
  {
    path:'/giveaway',
    name:'giveaway',
    components:Giveaway

  },

  /*{
    path:'/branches',
    name:'/branches',
    components:Branches
  }*/
  
 ]
  

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
