<template>
  <div class="chart-container">
  <div class='demo-input-suffix' style="width:200px;height:50px">
    属性方式：
  <el-input
    placeholder="请选择日期"
    suffix-icon="el-icon-date"
    v-model="input2">
  </el-input>
  <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input21">
  </el-input>
  </div>
    <chart height="90%" width="100%" />
  </div>
</template>

<script>
import Chart from '@/components/Charts/Keyboard'

export default {
  name: 'Box',
  components: { Chart },
  data() {
    return {
      input2: '',
      input21: ''
    }
  }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 80%;
  height: calc(100vh - 84px);
  margin: 0px 0px 0px 0px;

}
</style>

