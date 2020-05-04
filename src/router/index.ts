import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      menuShow: true,
      menuName: '首页',
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      menuShow: true,
      menuName: '关于页',
    },
  },
  {
    path: '/teaching',
    name: 'teaching',
    component: () => import('../views/teaching/Teacher.vue'),
    meta: {
      menuShow: true,
      menuName: '课程管理',
    },
    children: [
      {
        path: 'Teacher',
        name: 'teachingTeacher',
        component: () => import('../views/teaching/Teacher.vue'),
        meta: {
          menuShow: true,
          menuName: '教师',
        },
      },
      // {
      //   path: 'Subject',
      //   name: 'teachingSubject',
      //   component: () => import('../views/teaching/Subject.vue'),
      //   meta: {
      //     menuShow: true,
      //     menuName: '学科',
      //   },
      // },
      // {
      //   path: 'Glass',
      //   name: 'teachingGlass',
      //   component: () => import('../views/teaching/Glass.vue'),
      //   meta: {
      //     menuShow: true,
      //     menuName: '班级',
      //   },
      // },
      // {
      //   path: 'Schedule',
      //   name: 'teachingSchedule',
      //   component: () => import('../views/teaching/Schedule.vue'),
      //   meta: {
      //     menuShow: true,
      //     menuName: '排课',
      //   },
      // },
    ],
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
