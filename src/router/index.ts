import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import { getAuthDataToLoalStorage } from '@/helpers/auth';
import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const token = store.getters['user/token'];
  if (!token) {
    const authData = getAuthDataToLoalStorage();
    if (authData) {
      store.commit('user/set', authData);
    }
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      next({
        path: '/sign-in',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
