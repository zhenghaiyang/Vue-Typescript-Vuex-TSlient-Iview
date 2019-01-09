<template>
  <div class="template-box">
    <div class='template-content'>
      <div class="card">
        <HomeHeader></HomeHeader>
      </div>
      <div style="margin-top:15px">
        <Row >
          <Col span="8">
            <div class="type_pie">
              <HomePie></HomePie>
            </div>
          </Col>
          <Col span="16">
            <div class="week_bar">
              <HomeWeekEchart></HomeWeekEchart>
            </div>
          </Col>
        </Row>
      </div>
      <div class="month_line">
        <HomeMonthEcharts></HomeMonthEcharts>
      </div>
      <!-- 本周节点图 柱状图 -->
      <!-- 本月节点概括图 折线图-->
      <!-- 当日节点数字 实时更新-->
      <!-- 当日节点数字 实时更新-->
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import HomeHeader from './HomeHeader.vue';
import HomeMonthEcharts from './HomeMonthEcharts.vue';
import HomePie from './HomePie.vue';
import HomeWeekEchart from './HomeWeekEchart.vue';
@Component({
  components: {
    HomeHeader,
    HomeMonthEcharts,
    HomePie,
    HomeWeekEchart,
  },
})
export default class Home extends Vue {



}
</script>
<style lang="less">
.card {
  overflow: hidden;
}
.type_pie {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  min-height: 200px;
}
.week_bar {
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  min-height: 200px;
}
.month_line {

}
</style>
