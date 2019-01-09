import Main from '@/views/Main/Main.vue';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);



export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: '登录 - 税务管理系统 ',
    },
    component: () => import('@/login.vue'),
};


// export const page403 = {
//     path: '/403',
//     meta: {
//         title: '403-权限不足'
//     },
//     name: 'error-403',
//     component: () => import('@/views/error-page/403.vue')
// };
//
// export const page500 = {
//     path: '/500',
//     meta: {
//         title: '500-服务端错误'
//     },
//     name: 'error-500',
//     component: () => import('@/views/error-page/500.vue')
// };

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    children: [
       { path: 'home',  name: 'home_index', component: () => import('@/views/Home/Home.vue')},
       { path: 'resetPassword',  name: 'reset_password', component: () => import('@/views/ResetPassword/ResetPassword.vue')},
    ],
};
// { path: 'home', title: { i18n: 'home' }, name: 'home_index', component: () => import('@/views/home/home.vue') },
export const routers: any = [
    loginRouter,
];
