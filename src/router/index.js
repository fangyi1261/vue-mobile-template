import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
// const Home = resolve => require(['../views/Home.vue'], resolve); // 路由懒加载
const Home = resolve => require.ensure([], () => resolve(require('../views/Home.vue')), 'home');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') // 路由动态加载
  }
];

const router = new VueRouter({
  routes
});

export default router;
