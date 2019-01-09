import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Cookies from 'js-cookie';
import { routers, otherRouter } from './router';



Vue.use(VueRouter);

// 路由配置
const RouterConfig: any = {
    mode: 'history',
    routes: routers,
};







export const router = new VueRouter(RouterConfig);
