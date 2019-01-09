<template>
  <div id="homeWeek" style="width:100%;height:300px"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as _echarts from 'echarts';
@Component({})
export default class HomeWeekEchart extends Vue {

    private echart: any = null;
    public created(): void {
      this.echart = _echarts;
    }

    public mounted(): void {
      console.log('echarts', _echarts);
      const myChart = this.echart.init(document.getElementById('homeWeek'));
      // 绘制图表
      myChart.setOption({
          title: {
              text: '本周节点变化',
              x: 'center',
          },
          tooltip: {},
          xAxis: {
              data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
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
              data: [1, 2, 3, 4, 5, 6, 7],
          }],
      });
    }

}
</script>
