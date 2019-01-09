import { Commit } from 'vuex';
import {router} from '@/router/index';
const state: any = {
  routerlist: [],
};

const mutations: any = {
  saveRouterList(states: any, params: object) {
    states.routerlist = params;
  },
};

const actions: any = {
  // 保存菜单列表
  saveRouterListFN(context: { commit: Commit }, params: any) {
    console.log('saveMenuListFNAAAAA', params);
    context.commit('saveRouterList', params);
    console.log('routers', router);
    console.log('111', params);
    // router.addRoutes(params);
  },
};

export default {
    namespaced: true, // namespaced为false的时候，state,mutations,actions全局可以调用，为true，生成作用域，引用时要声明模块名称
    state,
    mutations,
    actions,
};
