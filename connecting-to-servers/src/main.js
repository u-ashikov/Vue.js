import Vue from 'vue'
import App from './App.vue'
import VueResource from '../node_modules/vue-resource'

new Vue({
  el: '#app',
  render: h => h(App)
});

Vue.use(VueResource);

Vue.http.options.root = 'https://books-b6a94.firebaseio.com';
