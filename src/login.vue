<template>
  <div class='login'>
    <div class='title'>
      <p>{{`${globConfig.loginTitle}登录`}}</p>
    </div>
    <div class="loginForm">
      <Form ref="loginFormValidate"  :label-width="70" :model="loginForm" :rules="loginFormRules">
        <FormItem label="用户名：" prop="name">
            <Input  placeholder="请输入用户名" class="point-input" v-model='loginForm.name'></Input>
        </FormItem>
        <FormItem label="密码：" prop="password">
            <Input  placeholder="请输入密码" class="point-input" v-model='loginForm.password' type="password"></Input>
        </FormItem>
      </Form>
    </div>
    <div class="login-foot">
      <Button type="primary" style="width:200px" @click="handleLogin" >登录</Button>
    </div>
    <Spin size="large" fix v-if="loading"></Spin>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import globConfig from '@/assets/globConfig';
import Message from 'iview';
import { login } from '@/api/login';
import Cookie from 'js-Cookie';
import { utils } from '@/libs/utils';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace,
} from 'vuex-class';
interface LoginForm {
  name: string;
  password: string;
}
const someModule = namespace('loginVUEX');
@Component
export default class Login extends Vue {

    @someModule.State((state) => state.routerlist) routerlist;
    @someModule.Action('saveRouterListFN') saveRouterListFN;
    // @someModule.Getter('menulist') moduleGetterFoo;

    public globConfig: object = globConfig;
    public loginForm: LoginForm = {
      name: '',
      password: '',
    };
    public loading: boolean = false;
    public loginFormRules: any = {
      name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    };
    public handleLogin(): void {
      const params: object = {
        name: this.loginForm.name,
        password: this.md5(this.loginForm.password),
      };
      const formRefName: string = 'loginFormValidate';
      const formRef: any = this.$refs[formRefName];
      formRef.validate((valid: object) => {
        if (valid) {
          this.loading = true ;
          login(params).then((res: any) => {
            // console.log('this.loginForm', this.loginForm);
            this.setStore('userinfo', res.data);
            this.setStore('userStatus', '10086');
            this.setStore('repMenulist', res.data.meunlist);
            utils.initRouter();
            // this.saveRouterListFN(utils.initMenuList(res.data.meunlist));
            this.$router.push('/home');
          }).finally(() => {
            this.loading = false;
          });
        }
      });
    }
}
</script>

<style lang="less">
.login {
  width: 350px;
  height: 300px;
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 1px solid #dcdee2;
  border-color: #e8eaec;
  border-radius: 4px;
  &:hover {
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    border-color: #eee;
  }
  // box-shadow: 1px 1px 2px 3px;
  .title {
    border-bottom: 1px solid #e8eaec;
    padding: 14px 16px;
    line-height: 1;
    line-height: 20px;
    font-size: 14px;
    color: #17233d;
    font-weight: 700;
    text-align: center;
  }
  .loginForm {
    padding: 16px;
  }
  .login-foot {
    text-align: center;
  }
}
</style>
