<template>
  <div class="table">
    <Table border :columns="columns5" :data="tableList" :loading="loading" @on-selection-change="handleSelection"></Table>
    <div class="point-page">
      <Page :total="40" size="small" show-elevator show-sizer />
    </div>
    <Modal
       v-model="delModal"
       title="删除确认"
       @on-ok="handelSubmitDel"
       @on-cancel="() => this.delModal = false">
       <Alert type="warning">
         确定删除?
         <template slot="desc">
           删除当角色将删除关联数据.
         </template>
       </Alert>
   </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import UsrtTableColumn from './tableColumnITF';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace,
} from 'vuex-class';

const nameSpace = namespace('userVUEX');

@Component({})
export default class UserTable extends Vue {

  @nameSpace.State((state) => state.tableList ) tableList;
  @nameSpace.State((state) => state.loading ) loading;  // 列表loading
  @nameSpace.State((state) => state.searchData ) searchData;
  @nameSpace.Action('getTableListFN') getTableListFN;
  @nameSpace.Action('updateSelectionFN') updateSelectionFN;
  @nameSpace.Action('delUserFN') delUserFN;
  @Prop({type: Function})
  openModal;
  private delModal: boolean = false;
  private submitDelObj: object = {};
  private columns5: Array<UsrtTableColumn> = [
    {
      type: 'selection',
      width: 60,
      align: 'center',
    },
    {
      title: '姓名',
      key: 'name',
      sortable: true,
    },
    {
      title: '账号',
      key: 'userName',
      sortable: true,
    },
    {
      title: '角色',
      key: 'role',
      sortable: true,
    },
    {
      title: '所属部门',
      key: 'department',
    },
    {
      title: '性别',
      key: 'sex',
      render: (h: any, params: any ) => {
        return h('div', params.row.sex === 1 ? '男' : '女');
      },
    },
    {
      title: '备注',
      key: 'remark',
    },
    {
      title: '操作',
      render: (h: any, params: any ) => {
        return h('div', [
          h('Button', {
            props: {
              type: 'primary',
              size: 'small',
            },
            style: {
              marginRight: '5px',
            },
            on: {
              click: () => {
                this.showModel(params.row);
              },
            },
          }, '编辑' ),
          h('Button', {
            props: {
              type: 'warning',
              size: 'small',
            },
            on: {
              click: () => {
                this.handleDel(params.row);
              },
            },
          }, '删除' ),
        ]);
      },
    },
  ];
  public created(): void {
    this.getTableList();
  }

  // 获取列表数据
  public getTableList(): void {
    const params = {
      pageNum: 1,
      pageSize: 10,
    };
    this.getTableListFN(params);
  }

  // 删除
  public handleDel(item): void {
    this.delModal = true;
    this.submitDelObj = item;
  }
  // 确定删除
  public handelSubmitDel(): void {
    this.delUserFN([this.submitDelObj]).then((res) => {
      this.getTableListFN(this.searchData);
    }).finally(() => {
      return;
    });
  }
  // 编辑
  public showModel(item): void {
    this.openModal('edit', item);
  }
  // 复选框事件
  public handleSelection(selection): void {
    console.log(selection);
    this.updateSelectionFN(selection);
  }

}
</script>

<style lang="less">
.table {
  margin-top: 20px;
}
</style>
