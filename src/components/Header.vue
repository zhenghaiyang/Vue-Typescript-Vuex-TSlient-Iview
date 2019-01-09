<template>
  <div class="header">
    <div class="header-left">
      <div class="logo">
        <img src="../assets/logo.png"  height="50px"/>
      </div>
      <span class="vertical"></span>
      <span class="systemName">{{globConfig.loginTitle}}</span>
    </div>
    <div class="menu">
      <Menu mode="horizontal" theme="dark">
        <MenuItem v-for="(item,index) in menulist" v-if="!item.children" :name='item.name' :to="item.path" :key="item.url">
          <Icon :type="item.icon"/>
          {{item.title}}
        </MenuItem>
        <Submenu v-for="(item,index) in menulist" v-if="item.children" :name="item.name" :key="item.url">
          <template slot="title">
            <Icon :type="item.icon"/>
            {{item.title}}
          </template>
          <MenuItem v-for="(items,indexs) in item.children" :name="items.name" :to="items.path" :key="items.url">
            <Icon :type="items.icon"/>
            {{items.title}}
          </MenuItem>
        </Submenu>
    </Menu>
    </div>
    <div class="header-right">
      <a title="全屏" href="javascript:void(0)" style="text-decoration: none;outline: none;color: #fff;">
        <Icon type="ios-expand" class="fullScreen" @click="handleFullScreen"/>
      </a>
      <span>欢迎你 &nbsp;&nbsp; |</span>
      <span style="margin-left:10px;margin-right: 10px;">{{userinfo.username}}</span>
      <div class='right-dropdown'>
        <Dropdown @on-click="handleResetPassword">
          <a href="javascript:void(0)">
              <Icon type="ios-arrow-down" class="right-dropdown"></Icon>
          </a>
          <DropdownMenu slot="list">
              <DropdownItem name="resetPassword">修改密码</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div class="log-out">
        <Icon type="md-log-out" class="icon" @click="handleOut"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import globConfig from '@/assets/globConfig';


interface HeaderDataInterface {
  userinfo: object;
}

@Component({})
export default class Header extends Vue {

  @Prop({type: Array})
  private menulist;

  public globConfig: object;
  public userinfo: HeaderDataInterface = {
    userinfo: {},
  };
  constructor(props) {
    super(props);
    this.globConfig = globConfig;
  }

  public created(): void {
    this.userinfo = this.getStore('userinfo');
    console.log('menulist', this.menulist);
  }

  public handleOut(): void {
    this.removeStore('userinfo');
    this.removeStore('userStatus');
    this.removeStore('repMenulist');
    this.$router.push('/login');
  }

  public handleResetPassword(item): void {
    this.$router.push('/resetPassword');
  }

  // 全屏
  public handleFullScreen(): void {
    const  El = document.getElementById('point-content');
    if (El !== null) {
      El.requestFullscreen();
    }
  }
}
</script>

<style lang="less">
.header {
  height: 60px;
  line-height: 60px;
  background: #515a6e;
  .menu {
    float: left;
    margin-left: 100px;
  }
  .header-left {
    width: 300px;
    height: 60px;
    float: left;
    .logo {
      width: 180px;
      height: 60px;
      text-align: center;
      padding: 5px;
      vertical-align: middle;
      display: inline-block;
    }
    .vertical {
      width: 2px;
      height: 40px;
      line-height: 60px;
      display: inline-block;
      background: #fff;
      vertical-align: middle;
    }
    .systemName {
      color: #fff;
      font-weight: 700;
      margin-left: 10px;
      font-size: 18px;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .header-right {
    width: 200px;
    height: 60px;
    float: right;
    color: #fff;
    margin-right: 10px;
    .fullScreen {
      font-size: 15px;
      margin-right: 10px;
      &:hover {
        font-size: 15px;
        cursor: pointer;
        color:#007fff;
      }
    }
    .log-out {
      display: inline-block;
      vertical-align: middle;
      font-size: 25px;
      float: right;
      margin-right: 10px;
      .icon {
        &:hover {
          font-size: 25px;
          cursor: pointer;
          color:#007fff;
        }
      }
    }
    .right-dropdown {
      display: inline-block;
      font-size: 20px;
      vertical-align: middle;
      .right-dropdown {
        color: #fff;
        &:hover {
          cursor: pointer;
          color:#007fff;
        }
      }
    }
  }
}
</style>
