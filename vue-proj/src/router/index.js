import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home page',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/Clients',
      name: 'Clients',
      component: () => import('@/views/Clients.vue'),
    },
    {
      path: '/page2',
      name: 'Page 2',
      component: () => import('@/views/Page2.vue'),
    },
    {
      path: '/page3',
      name: 'Page 3',
      component: () => import('@/views/Page3'),
    },
    {
      path: '/page4',
      name: 'Page 4',
      component: () => import('@/views/Page4'),
    },
  ],
});

export default router;
