import { Commit } from 'vuex';
import * as xhrApi from '@/api/user';


const state: any = {
  tableList: [],
  loading: false,
  selection: [],
  searchData: {},
};

const mutations: any = {
  saveTableList(states: any, params: object) {
    states.tableList = params;
  },
  changeLoading(states: any, params: boolean) {
    states.loading = params;
  },
  updateSelection(states: any, params: any) {
    states.selection = params;
  },
  updateSearchData(states: any, params: any) {
    states.searchData = params;
  },
};

const actions: any = {
  // 获取列表数据
  getTableListFN(context: { commit: Commit }, params: any) {
      context.commit('changeLoading', true);
      xhrApi.getUserTableList(params).then((res) => {
        context.commit('saveTableList', res.data);
        context.commit('updateSearchData', params);
        context.commit('changeLoading', false);
      }).finally(() => {
        context.commit('changeLoading', false);
      });
  },
  // 更新selection
  updateSelectionFN(content: { commit: Commit }, params: any) {
    content.commit('updateSelection', params);
  },
  // 删除数据
  delUserFN(params: any) {
    return xhrApi.delUser(params);
  },
};

export default {
    namespaced: true, // namespaced为false的时候，state,mutations,actions全局可以调用，为true，生成作用域，引用时要声明模块名称
    state,
    mutations,
    actions,
};
