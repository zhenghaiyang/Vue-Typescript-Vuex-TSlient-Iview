import Vue from 'vue';
import App from './App.vue';
import 'iview/dist/styles/iview.css';
import '@/assets/globStyle.less';
import Iview from 'iview';
import md5 from 'md5';
import { getRequest, postRequest, putRequest, deleteRequest, uploadFileRequest } from '@/libs/axios';
import { getStore, setStore, removeStore } from '@/libs/storage';
import {router} from './router/index';
import store from './store/store';
import {utils} from '@/libs/utils';


Vue.use(Iview);
Vue.config.productionTip = false;
// 挂载全局使用的方法
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.uploadFileRequest = uploadFileRequest;
Vue.prototype.setStore = setStore;
Vue.prototype.getStore = getStore;
Vue.prototype.removeStore = removeStore;
Vue.prototype.md5 = md5;

// 路由拦截
router.beforeEach((to, from, next) => {
    Iview.LoadingBar.start();
    next();
});

router.afterEach( (route) => {
    Iview.LoadingBar.finish();
});


new Vue({
  router,
  store,
  render: (h) => h(App),
  created: () => {
    utils.initRouter();
  },
}).$mount('#app');
