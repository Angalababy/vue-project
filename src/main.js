import Vue from 'vue'
import router from './router'

import 'lib-flexible/flexible'
import App from './App.vue'

import './mock/mockServer'
import store from './store'

new Vue({
  el:'#app',
  router,
  components:{
    App
  },
  template:'<App/>',
  store
})
