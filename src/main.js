import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'
import Unsplash from 'unsplash-js';
import axios from 'axios';





Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.use(BootstrapVue)


Vue.use(IconsPlugin)
Vue.prototype.$unsplash = Unsplash;
Vue.prototype.$axios = axios

new Vue({
  router,
//Vue.use(useVuelidate)
  render: h => h(App)
}).$mount('#app')
