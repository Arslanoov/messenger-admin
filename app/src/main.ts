import Vue from 'vue';

import router from './router';
import store from './store';

import App from './App.vue';

require('./plugins/axios');

import Buefy from 'buefy';
Vue.use(Buefy);

import 'buefy/dist/buefy.css';

import './assets/styles/main.sass';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
