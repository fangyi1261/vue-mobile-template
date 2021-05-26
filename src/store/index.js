import Vue from 'vue';
import Vuex from 'vuex';
import menu from './modules/menu';

import vuexToLocalStorage from '@/utils/vuexCache.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    menu
  },
  plugins: [vuexToLocalStorage]
});
