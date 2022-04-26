<template>

  <div :id="id" :class="className" :style="{height:height,width:width}" />

</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import 'echarts-wordcloud/dist/echarts-wordcloud'
export default {

    props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '600px'
    },
    height: {
      type: String,
      default: '700px'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption({

        title: {
          text: 'Comparison of scores in Second-level index',
          subtext: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['', '', '']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['enrich and rigorous', ' highlights', 'clear', 'blackboard writing', 'grasp progress', 'good attitude', 'answer', 'strict', 'active atmosphere', 'harvest']
        },

        series: [
          {
            name: 'Original',
            type: 'bar',
            data: [90, 88.94, 88.92, 88.79, 90, 90, 90.61, 87.88, 88.48, 89.70]
          },

          {
            name: 'reliable',
            type: 'bar',
            data: [93.33, 86.67, 93.33, 86.67, 86.67, 93.33, 100, 86.67, 80, 86.67]
          },
          {
            name: 'Supervisor',
            type: 'bar',
            data: [100, 100, 100, 86.7, 86.7, 80, 80, 80, 80, 80]
          }
        ]

      })
    }
  }
}
</script>
