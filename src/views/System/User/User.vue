<template>
  <div class="template-box">
    <div class='template-content'>
      <Breadcrumb style="margin-bottom:10px">
         <BreadcrumbItem to="/home">主页</BreadcrumbItem>
         <BreadcrumbItem >{{this.$route.name}}</BreadcrumbItem>
      </Breadcrumb>
      <div class="template-left">
        <UserSearch :openModal="openModal"></UserSearch>
        <UserTable :openModal="openModal"></UserTable>
      </div>
      <div class="template-right">
        <!-- echarts -->
        <Alert>
          基本数据概览
          <template slot="desc">
            人员分配基本概览
          </template>
        </Alert>
        <UserBarEchart></UserBarEchart>
      </div>
    </div>
    <UserModal ref="userModalRef" :userForm="userFormModal" :title="modalTitle"></UserModal>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import UserTable from './UserTable.vue';
import UserSearch from './UserSearch.vue';
import UserModal from './UserModal.vue';
import UserBarEchart from './UserBarEchart.vue';
import userFormModalITF from './userFormModalITF';
@Component({
  components: {
    UserTable,
    UserSearch,
    UserModal,
    UserBarEchart,
  },
})
export default class User extends Vue {

  $refs: any = {
    userModalRef: UserModal,
  };
  private modalTitle: string = '新增';
  public userFormModal: userFormModalITF = {
    name: '',
    role: '',
    department: '',
    sex: '',
    userName: '',
    remark: '',
  };


  public created(): void {
    console.log('1212', this.$route);
  }

  // 打开modal
  public openModal(type, obj): void {
    // console.log(this.$refs.userModalRef);
    // console.log(type);
    // console.log('obj', obj);
    const tempObj: userFormModalITF = {
      name: '',
      role: '',
      department: '',
      sex: '',
      userName: '',
      remark: '',
    };
    if (type === 'add') {
      this.userFormModal = tempObj;
      this.$refs.userModalRef.showModal();
    } else {
      this.userFormModal = Object.assign(obj);
      this.modalTitle = '编辑';
      this.$refs.userModalRef.showModal();
    }
  }



}
</script>

<style lang="less">
.template-left {
  float: left;
  width: 70%;
}
.template-right {
  float: left;
  width: 30%;
  padding-left: 10px;
}
</style>
