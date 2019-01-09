import { routers, otherRouter } from '@/router/router';
import {router} from '@/router/index';
import { getStore, setStore } from './storage';
// 初始化路由
const initRouter: any = () => {
  if (getStore('repMenulist')) {
    const allRouter = renderRouterDG(otherRouter, getStore('repMenulist'));
    router.addRoutes([allRouter]);
  } else {
    router.push('/login');
  }
};
// 初始化路由
const renderRouterDG: any = ( route: any, data: any ) => {
  if ( route && route.children ) {
    const submitRoute = route.children;
    data.map((item: any, index: any) => {
      console.log('item', item);
      if ( item.children && item.children.length > 0 ) {
        item.children.map((items: any, indexs: any) => {
          console.log('path', items.path);
          submitRoute.push({
            path: items.path,
            title: items.title,
            name: items.name,
            component: () => import('@/views/' + items.url + '.vue'),
          });
        });
      }
      submitRoute.push({
        path: item.path,
        title: item.title,
        name: item.name,
        component: () => import('@/views/' + item.url + '.vue'),
      });
    });
  }
  return route;
};

// 判断用户是否登录
const checkUserLogin: any = () => {
  console.log('getStore', getStore('userStatus'));
  if (getStore('userStatus') !== 10086) {
    console.log('checkUserLogin');
    router.push('/login');
  }
};


export const utils = {
  initRouter: initRouter,
  checkUserLogin: checkUserLogin,
};
