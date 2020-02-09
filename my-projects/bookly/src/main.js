import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { router } from './routing/router.js'
import { store } from './store/store.js'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);
Vue.use(VueRouter);

store.dispatch('tryAutoLogin');

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
