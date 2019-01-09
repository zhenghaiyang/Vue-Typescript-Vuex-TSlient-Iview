<template>
  <Modal
    v-model="userModalStatus"
    :title="title">
    <Form  :model="myUserForm" ref="userFormRef" :label-width="80">
      <FormItem label="姓名" prop="name">
            <Input  placeholder="Enter something..." v-model="myUserForm.name" class="point-input"></Input>
      </FormItem>
      <FormItem label="角色" prop="role">
            <Input  placeholder="Enter something..." v-model="myUserForm.role" class="point-input"></Input>
      </FormItem>
      <FormItem label="所属部门"  prop="department">
            <Input  placeholder="Enter something..." v-model="myUserForm.department" class="point-input"></Input>
      </FormItem>
      <FormItem label="性别" prop="sex">
            <Select v-model="myUserForm.sex" class="point-select">
              <Option value="1" >男</Option>
              <Option value="2" >女</Option>
            </Select>
      </FormItem>
      <FormItem label="账号" prop="userName">
            <Input  placeholder="Enter something..." v-model="myUserForm.userName" class="point-input"></Input>
      </FormItem>
      <FormItem label="备注" prop="remark">
            <Input  placeholder="Enter something..." v-model="myUserForm.remark" class="point-input"></Input>
      </FormItem>
    </Form>
    <div slot="footer" class="point-foot">
        <Button @click="cancel">取消</Button>
        <Button type="primary"   @click="submit">确定</Button>
    </div>
</Modal>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import userFormModalITF from './userFormModalITF';
@Component({
  name: 'userFormRef',
})
export default class UserModal extends Vue {
  private userModalStatus: boolean = false;

  $refs: any = {
    name: 'userFormRef',
  };

  private myUserForm: userFormModalITF = {
    name: '',
    role: '',
    department: '',
    sex: '',
    userName: '',
    remark: '',
  };

  @Prop({type: String})
  private title;

  @Prop({type: Object})
  private userForm;

  @Watch('userModalStatus')
  private updateUserForm(): void {
    console.log('this.userForm', this.userForm);
    this.myUserForm = JSON.parse(JSON.stringify(this.userForm));
  }


  // 打开弹出窗
  public showModal(): void {
    this.userModalStatus = true;
  }
  // 关闭弹出窗
  public closeModal(): void {
    this.userModalStatus = false;
  }

  // 取消
  public cancel(): void {
    console.log('da', this.myUserForm);
    console.log(this.$refs.userFormRef);
    this.$refs.userFormRef.resetFields();
    this.closeModal();
    // return;
  }
  // 提交
  public submit(): void {
    console.log('this.myUserForm', this.myUserForm);
  }

}
</script>
