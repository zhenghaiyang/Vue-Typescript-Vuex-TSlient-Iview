<template>
  <div class="resetPassword">
    <strong class="point-strong">修改密码</strong>
    <Form ref="ResetPasswordformValidate" :model="resetPasswordForm" :rules="ResetPasswordruleValidate" :label-width="100">
         <FormItem label="原始密码" prop="oldPassword">
           <Input v-model="resetPasswordForm.oldPassword" placeholder="请输入原始密码"></Input>
         </FormItem>
         <FormItem label="新密码" prop="newPassword">
           <Input v-model="resetPasswordForm.newPassword" placeholder="请输入新密码" type="password"></Input>
         </FormItem>
         <FormItem label="确认新密码" prop="confirmPassword">
           <Input v-model="resetPasswordForm.confirmPassword" placeholder="请输入确认新密码" type="password"></Input>
         </FormItem>
    </Form>
    <div class="resetPassword-foot">
      <Button type="primary" @click="handleSubmit" class="point-button">确定</Button>
      <Button style="margin-left:20px" @click="handleReset" class="point-button">重置</Button>
    </div>
    <Spin size="large" fix v-if="loading"></Spin>
  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
interface ResetPasswordInterFace {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

@Component({
  name: 'ResetPasswordformValidate',
})
export default class ResetPassword extends Vue {
  constructor(props) {
    super(props);
    // this.validateOldPassword: any;
    // this.$refs =
    this.$refs = {
      ResetPasswordformValidate: '',
    };
  }
  public $refs: {
    ResetPasswordformValidate: any,
  };

  private loading: boolean = false;
  private resetPasswordForm: ResetPasswordInterFace = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };


  // 校验原始密码
   private validateOldPassword = (rule, value, callback): any => {
    // 拿到新密码
    if ( value === '' ) {
      callback(new Error('请输入密码'));
    } else {
      callback();
    }
  }
   // 校验新密码
  private validateNewPassword = (rule, value, callback): any => {
    if (value === '' ) {
      callback(new Error('请输入新密码'));
    } else {
      if ( this.resetPasswordForm.confirmPassword && value !== this.resetPasswordForm.confirmPassword ) {
        callback(new Error('两次输入的新密码不一致'));
      }
      callback();
    }

  }
   // 校验确认密码
  private validaConfirmPassword = (rule, value, callback): any => {
  // const that = this;
    if (value === '' ) {
      callback(new Error('请输入确认新密码'));
    } else {
      if ( this.resetPasswordForm.newPassword && value !== this.resetPasswordForm.newPassword ) {
         this.$refs.ResetPasswordformValidate.validateField('newPassword');
      }
      callback();
    }
  }

  public ResetPasswordruleValidate: object = {
    oldPassword: [{ required: true, validator: this.validateOldPassword, trigger: 'blur' }],
    newPassword: [{ required: true, validator: this.validateNewPassword, trigger: 'blur' }],
    confirmPassword: [{ required: true, validator: this.validaConfirmPassword, trigger: 'blur' }],
  };

  // 提交
  private handleSubmit = (): void => {
    console.log(this);
    this.$refs.ResetPasswordformValidate.validate((valid) => {
      if (valid) {
        this.loading = true;
        console.log(this.resetPasswordForm);
      }
    });
  }
  // 重置
  private handleReset = (): void => {
    this.$refs.ResetPasswordformValidate.resetFields();

    // return;
  }








}
</script>

<style lang="less">
  .resetPassword {
    width: 450px;
    height: 300px;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    margin: auto;
    padding: 30px 20px 30px 20px;
    background: #fff;
    border: 1px solid #dcdee2;
    border-color: #e8eaec;
    border-radius: 4px;
    &:hover {
      box-shadow: 0 1px 6px rgba(0,0,0,.2);
      border-color: #eee;
    }
    .resetPassword-foot {
      text-align: center;
    }
  }
</style>
