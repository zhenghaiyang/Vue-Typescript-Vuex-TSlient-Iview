<template>
  <div class="d3">
    <svg className="container" width='200' height='200' ref="d3test">
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as _d3 from 'd3';

@Component({
  name: 'd3test',
})
export default class D3test extends Vue {

  constructor(props) {
    super(props);
    this.$refs = {
      d3test: '',
    };
  }

  public $refs: {
    d3test: any,
  };


  public mounted(): void {
    console.log('222', _d3);
    console.log(this.$refs.d3test);
    _d3.select(this.$refs.d3test)
        .append('circle')
        .attr('r', 5)
        .attr('cx', 10 / 2)
        .attr('cy', 10 / 2)
        .attr('fill', 'red');
  }
}
</script>
