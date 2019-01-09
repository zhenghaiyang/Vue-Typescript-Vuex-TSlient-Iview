import Vue from 'vue';
import Vuex from 'vuex';
import loginVUEX from './modules/login';
import userVUEX from './modules/user';


Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    loginVUEX,
    userVUEX,
  },
});
