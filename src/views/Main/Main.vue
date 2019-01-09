<template>
  <div class="main">
      <div>
        <Header v-bind:menulist="menulist"></Header>
      </div>
      <div style="height: calc(100% - 60px);overflow: auto;" id="point-content">
        <router-view></router-view>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import {router} from '@/router/index';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace,
} from 'vuex-class';
const someModule = namespace('loginVUEX');

@Component({
  components: {
    Header,
  },
})
export default class Main extends Vue {
  // @someModule.State(state => state.menulist) menulist;
  private menulist: any;

  public created(): void {
    // console.log('login', this.menulist);
    // console.log('router', router);
    this.menulist = this.getStore('userinfo').meunlist;
  }


}
</script>

<style lang="less">
.main {
  width: 100%;
  height: 100%;
  background: #F0F0F0;
}
</style>
