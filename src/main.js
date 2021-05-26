import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import _ from 'lodash';
import 'lib-flexible/flexible.js';
import http from '@/api/index';
import './api/common/mock.js';

Vue.config.productionTip = false;

window.$vue = Vue;
window.$http = http;
window._ = _;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
