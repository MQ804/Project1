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
        component: () => import('@/views/UserData.vue'),
        title: 'UserData',
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
        component: () => import('@/views/Clients.vue'),
        title: 'Clients',
      },
    ],
  },
  {
    path: '/page2',
    component: Layout,
    children: [
      {
        path: '/page2',
        component: () => import('@/views/Page2.vue'),
        title: 'Page 2',
      },
    ],
  },
  {
    path: '/page3',
    component: Layout,
    children: [
      {
        path: '/page3',
        component: () => import('@/views/Page3'),
        title: 'Page 3',
      },
    ],
  },
  {
    path: '/page4',
    component: Layout,
    children: [
      {
        path: '/page4',
        component: () => import('@/views/Page4'),
        title: 'Page 4',
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
