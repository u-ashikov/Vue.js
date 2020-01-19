import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import UserStart from './components/user/UserStart.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/user', component: UserStart }
];

const router = new VueRouter({
  routes: routes
});

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
