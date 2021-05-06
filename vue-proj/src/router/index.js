import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import Clients from '@/views/Clients.vue';
import Page2 from '@/views/Page2.vue';
import Page3 from '@/views/Page3.vue';
import Page4 from '@/views/Page4.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home page',
      component: HomePage,
    },
    {
      path: '/Clients/:tab?',
      name: 'Clients',
      component: Clients,
      props: true,
    },
    {
      path: '/page2',
      name: 'Page 2',
      component: Page2,
    },
    {
      path: '/page3',
      name: 'Page 3',
      component: Page3,
    },
    {
      path: '/page4',
      name: 'Page 4',
      component: Page4,
    },
  ],
});

export default router;
