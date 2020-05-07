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
    path: '/teach',
    // name: 'Teaching',
    component: () => import('../views/teaching/Index.vue'),
    meta: {
      menuShow: true,
      menuName: '课程管理',
    },
    children: [
      {
        path: 'teacher',
        name: 'TeachingTeacher',
        component: () => import('../views/teaching/Teacher.vue'),
        meta: {
          menuShow: true,
          menuName: '教师',
        },
      },
      {
        path: 'subject',
        name: 'TeachingSubject',
        component: () => import('../views/teaching/Subject.vue'),
        meta: {
          menuShow: true,
          menuName: '学科',
        },
      },
      {
        path: 'grade',
        name: 'TeachingGrade',
        component: () => import('../views/teaching/Grade.vue'),
        meta: {
          menuShow: true,
          menuName: '年级',
        },
      },
      {
        path: 'glass',
        name: 'TeachingGlass',
        component: () => import('../views/teaching/Glass.vue'),
        meta: {
          menuShow: true,
          menuName: '班级',
        },
      },
      {
        path: 'shedule',
        name: 'TeachingSchedule',
        component: () => import('../views/teaching/Schedule.vue'),
        meta: {
          menuShow: true,
          menuName: '排课',
        },
      },
    ],
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
