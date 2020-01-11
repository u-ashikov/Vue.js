import Vue from 'vue'
import App from './components/App.vue'

export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
});
