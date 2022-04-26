<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '500px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
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
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
      "textStyle": {
"fontSize": 25,
"color": "#005eb2",
"fontFamily": "Microsoft YaHei"
},
       title: {
        text: '全校评论人数分布',
       
        subtext: '',
         x:'center',
        textStyle: {


fontSize:'30'
}
    },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['非常不可信', '不可信', '可信', '非常可信']
        },
        series: [
          {
            name: '',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 110],
            center: ['50%', '50%'],
            data: [
              { value: 893, name: '非常不可信' },
              { value: 6671, name: '不可信' },
              { value: 3584, name: '可信' },
              { value: 563, name: '非常可信' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
