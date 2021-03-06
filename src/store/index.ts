import Vue from 'vue';
import Vuex from 'vuex';
import { user as userStore } from './user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: userStore,
  },
});
