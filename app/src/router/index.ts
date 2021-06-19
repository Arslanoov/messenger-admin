import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import Users from '@/pages/Users.vue';

import { checkIsAuth } from '@/helpers/auth';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Index',
    redirect: {
      name: 'Home',
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
      layout: 'main',
    },
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    meta: {
      requiresAuth: true,
      layout: 'main',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresNoAuth: true,
      layout: 'auth',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'is-active'
});

router.beforeEach((to, from, next) => {
  const isAuth = checkIsAuth();

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresNotAuth = to.matched.some(record => record.meta.requiresNoAuth);

  if (requiresAuth && !isAuth) {
    next('/login');
    return;
  }

  if (requiresNotAuth && isAuth) {
    next('/');
    return;
  }

  next();
});

export default router;
