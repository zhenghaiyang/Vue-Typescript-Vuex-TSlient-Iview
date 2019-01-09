<template>
  <div class="point-form">
          <Form :label-width="80" inline ref="userForm" :model="userFormModel">
            <FormItem label="姓名" prop="name">
                  <Input  placeholder="Enter something..." v-model="userFormModel.name" class="point-input"></Input>
            </FormItem>
            <FormItem label="角色" prop="role">
                  <Input  placeholder="Enter something..." v-model="userFormModel.role" class="point-input"></Input>
            </FormItem>
            <FormItem label="所属部门" prop="department">
                  <Input  placeholder="Enter something..." v-model="userFormModel.department" class="point-input"></Input>
            </FormItem>
            <FormItem label="性别" prop="sex">
                  <Select v-model="userFormModel.sex" class="point-select">
                    <Option value="1" >男</Option>
                    <Option value="2" >女</Option>
                  </Select>
            </FormItem>
            <FormItem label="账号" prop="userName">
                  <Input  placeholder="Enter something..." v-model="userFormModel.userName" class="point-input"></Input>
            </FormItem>
            <FormItem>
              <Button class="point-button" icon="ios-search" type="primary" @click="handleSearch">搜索</Button>
              <Button class="point-button" style="margin-left:20px" @click="handleReset">重置</Button>
            </FormItem>
          </Form>
          <Collapse accordion simple >
                    <Panel name="1-1">
                      更多操作
                      <Button slot="content" type="primary" icon="md-person-add" @click="handleAddUser">添加用户</Button>
                      <Button slot="content" type="warning" style="margin-left:20px" @click="handelDelAll" :loading="loading">批量删除</Button>
                    </Panel>
          </Collapse>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Iview from 'iview';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace,
} from 'vuex-class';

const nameSpace = namespace('userVUEX');
import userFormModalITF from './userFormModalITF';



@Component({
  name: 'userForm',
})
export default class UserSearch extends Vue {

  @Prop({type: Function})
  openModal;

  @State('userVUEX') userVUEXData;
  @nameSpace.Action('getTableListFN') getTableListFN;
  @nameSpace.Action('delUserFN') delUserFN;
  private loading: boolean = false;

  constructor(props) {
    super(props);
    this.$refs = {
      userForm: '',
    };
  }
  public $refs: {
    userForm: any,
  };

  private userFormModel: userFormModalITF = {
    name: '',
    role: '',
    department: '',
    sex: '',
    userName: '',
  };

  // 搜索
  public handleSearch(): void {
      console.log(this.userFormModel);
      this.getTableListFN();
  }
  // 重置
  public handleReset(): void {
      this.$refs.userForm.resetFields();
  }

  // 批量删除
  public handelDelAll(): void {
    this.loading = true;
    const searchData = this.userVUEXData.searchData;
    this.delUserFN(this.userVUEXData.selection).then((res) => {
      Iview.Message.success( '操作成功' );
      this.getTableListFN(searchData);
    }).finally(() => {
      this.loading = false;
    });
  }
  // 添加用户
  public handleAddUser(): void {
    this.openModal('add');
  }
}
</script>

<style lang="less">
.point-form {
  border: 1px solid #dcdee2;
  border-color: #e8eaec;
  border-radius: 4px;
  padding-top: 10px;
  &:hover {
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    border-color: #eee;
  }
}

</style>
