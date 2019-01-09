<template>
  <Row type="flex" justify="space-around">
    <Col span="4">
      <Card class="card-content">
        <div class="card-left">
          <img src="../../assets/cat/cat1.jpg" width="100%" height="100%" />
        </div>
        <div class="card-right">
          <div style="padding-top:5px;padding-bottom:5px">
            <div>
              <p style="font-size: 50px;">
                <countTo :startVal="startNumber" :endVal="jiediannumber" :duration="3000"></countTo>
              </p>
            </div>
            <p>当日节点数</p>
          </div>
        </div>
      </Card>
    </Col>
    <Col span="4">
      <Card  class="card-content">
        <div class="card-left">
          <img src="../../assets/cat/cat2.jpg" width="100%" height="100%" />
        </div>
        <div class="card-right">
          <div style="padding-top:5px;padding-bottom:5px">
            <div>
              <p style="font-size: 50px;">
                <countTo :startVal="startNumber" :endVal="jiediannumber" :duration="3000"></countTo>
              </p>
            </div>
            <p>当日团体数</p>
          </div>
        </div>
      </Card>
    </Col>
    <Col span="4">
      <Card  class="card-content">
        <div class="card-left">
          <img src="../../assets/cat/cat3.jpg" width="100%" height="100%" />
        </div>
        <div class="card-right">
          <div style="padding-top:5px;padding-bottom:5px">
            <div>
              <p style="font-size: 50px;">
                <countTo :startVal="startNumber" :endVal="jiediannumber" :duration="3000"></countTo>
              </p>
            </div>
            <p>当日团体数</p>
          </div>
        </div>
      </Card>
    </Col>
    <Col span="4">
      <Card  class="card-content">
        <div class="card-left">
          <img src="../../assets/cat/cat4.jpg" width="100%" height="100%" />
        </div>
        <div class="card-right">
          <div style="padding-top:5px;padding-bottom:5px">
            <div>
              <p style="font-size: 50px;">
                <countTo :startVal="startNumber" :endVal="jiediannumber" :duration="3000"></countTo>
              </p>
            </div>
            <p>当日团体数</p>
          </div>
        </div>
      </Card>
    </Col>
    <Col span="4">
      <Card  class="card-content">
        <div class="card-left">
          <img src="../../assets/cat/cat5.jpg" width="100%" height="100%" />
        </div>
        <div class="card-right">
          <div style="padding-top:5px;padding-bottom:5px">
            <div>
              <p style="font-size: 50px;">
                <countTo :startVal="startNumber" :endVal="jiediannumber" :duration="3000"></countTo>
              </p>
            </div>
            <p>当日团体数</p>
          </div>
        </div>
      </Card>
    </Col>
  </Row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import countTo from 'vue-count-to';

@Component({
  components: {
    countTo,
  },
})
export default class HomeHeader extends Vue {

  private startNumber: number = 0;
  private jiediannumber: number = 100;

}
</script>
<style>
.card-content {
  float: left;
  width:100%%;
  overflow: hidden;
}
.ivu-card-body {
  padding: 0px;
}
.card-left {
  width: 36%;
  height: 120px;
  float: left;
}
.card-right {
  width: 64%;
  float: left;
  text-align: center;
  height: 100%;
}
</style>
