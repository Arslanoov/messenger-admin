import axios from 'axios';
import store from '@/store';
import router from '@/router';

import UserInterface from '@/types/user';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const user: UserInterface | undefined = JSON.parse(localStorage.getItem('user') as string);
if (user) {
  axios.defaults.headers.common.Authorization = `Bearer ${user.access_token}`;
}

axios.interceptors.response.use((response) => response, async (error) => {
  if ([401, 403].includes(error.response?.status)) {
    store.commit('auth/logOut');
  }

  router.push('/login').catch(() => {});

  return Promise.reject(error);
});
