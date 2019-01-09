<template>
  <div class="pie-echarts">
    <div id="pie" class="piediv"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// var echarts = require('echarts');
import * as _echarts from 'echarts';
@Component({})
export default class UserBarEchart extends Vue {

  private echart: any = null;


  public created(): void {
    this.echart = _echarts;
  }

  public mounted(): void {
    console.log('echarts', _echarts);
    const myChart = this.echart.init(document.getElementById('pie'));
    // 绘制图表
    myChart.setOption({
        title: {
            text: '部门人数分布',
        },
        dataZoom: [{
          xAxisIndex: [0],
        }],
        tooltip: {},
        xAxis: {
            data: ['商务部', '财政部', '后勤部', '销售部', '人力资源部'],
            boundaryGap: true,
            axisTick: {
              alignWithLabel: true,
              interval: 0,
            },
        },
        yAxis: {},
        series: [{
            name: '人数',
            type: 'bar',
            data: [1, 2, 3, 4, 5],
        }],
    });
  }

}
</script>
<style lang="less">
.pie-echarts {
  width: 100%;
  min-height: 300px;
  // background: red;
  padding: 10px;
  .piediv {
    min-height: 300px;
  }
}
</style>
