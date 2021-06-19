import Vue from 'vue';
import Vuex from 'vuex';

import auth from '@/store/auth';
import users from '@/store/manage/users';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    auth,
    users,
  },
});
