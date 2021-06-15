import Vue from 'vue';

import Buefy from 'buefy';

import router from './router';
import store from './store';

import App from './App.vue';

require('./plugins/axios');

import './assets/styles/main.sass';

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
