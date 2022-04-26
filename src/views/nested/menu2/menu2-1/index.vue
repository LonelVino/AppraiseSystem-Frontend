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
          text: ' Comparison of scores in first-level index'

        },
        backgroundColor: '#fff',
        tooltip: {},
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Original', 'reliable', 'Supervisor']
        },
        radar: {
        // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: 'teaching content', max: 100 },
            { name: 'teaching means', max: 100 },
            { name: 'teaching attitude', max: 100 },
            { name: 'teaching effect', max: 100 }
          ]
        },
        series: [{
          name: '',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [89.09, 89.39, 88.94, 89.24],
              name: 'Original'
            },
            {
              value: [93.33, 86.67, 92.16, 83.33],
              name: 'reliable'
            },
            {
              value: [100.00, 86.70, 80.00, 80.00],
              name: 'Supervisor'
            }
          ]
        }]

      })
    }
  }
}
</script>
