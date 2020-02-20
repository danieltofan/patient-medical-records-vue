import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(require('vue-moment'))

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
