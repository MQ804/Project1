import Layout from '@/layout/index.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'header',
        component: () => import('@/layout/components/header/header.vue'),
        name: 'header',
      },
      {
        path: 'footer',
        component: () => import('@/layout/components/footer.vue'),
        name: 'footer',
      },
    ],
  },
  {
    path: '/userData',
    component: Layout,
    children: [
      {
        path: '/userData',
        name: 'User data',
        component: () => import('@/views/UserData.vue'),
        icon: 'bar-chart-line-fill',
      },
    ],
  },
  {
    path: '/Clients',
    component: Layout,
    children: [
      {
        path: '/Clients',
        name: 'Clients',
        component: () => import('@/views/Clients.vue'),
      },
    ],
  },
  {
    path: '/page2',
    component: Layout,
    children: [
      {
        path: '/page2',
        name: 'Page 2',
        component: () => import('@/views/Page2.vue'),
      },
    ],
  },
  {
    path: '/page3',
    component: Layout,
    children: [
      {
        path: '/page3',
        name: 'Page 3',
        component: () => import('@/views/Page3'),
      },
    ],
  },
  {
    path: '/page4',
    component: Layout,
    children: [
      {
        path: '/page4',
        name: 'Page 4',
        component: () => import('@/views/Page4'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
