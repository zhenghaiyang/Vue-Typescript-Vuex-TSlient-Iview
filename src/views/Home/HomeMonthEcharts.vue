<template>
  <div id="homeMonth" style="width:100%;height:300px"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as _echarts from 'echarts';
@Component({})
export default class HomeMonthEcharts extends Vue {

    private echart: any = null;
    private monthList: Array<string> = [];
    private monthListData: Array<number> = [];
    public created(): void {
      this.echart = _echarts;
      this.renderEchartsData();
    }

    public renderEchartsData(): void {
      const monthList: Array<string> = [];
      const monthListData: Array<number> = [];
      for (let i = 1; i < 24; i++) {
        monthList.push(`2018-0${i}`);
        monthListData.push(i);
      }
      this.monthList = monthList;
      this.monthListData = monthListData;
    }



    public mounted(): void {
      console.log('echarts', _echarts);
      const myChart = this.echart.init(document.getElementById('homeMonth'));
      // 绘制图表
      myChart.setOption({
          title: {
              text: '本月节点变化',
              x: 'center',
          },
          dataZoom: [{
            xAxisIndex: [0],
          }],
          tooltip: {},
          xAxis: {
              type: 'category',
              data: this.monthList,
          },
          yAxis: {
            type: 'value',
          },
          series: [{
              type: 'line',
              data: this.monthListData,
          }],
      });
      this.$forceUpdate();
    }

}
</script>
