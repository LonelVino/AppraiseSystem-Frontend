<template>
  <div :class="className" :style="{height:height,width:width,margin:margin}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 3000

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

"color": "#005eb2",
"fontFamily": "Microsoft YaHei",
fontSize:'22'
},
      title: {
        text: '三种影响因素变化趋势',
        subtext: '',
         x:'center',
        textStyle: {


fontSize:'30'
}
    },
      backgroundColor:'#FFFFFF',
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        radar: {
          radius: '66%',
          center: ['50%', '50%'],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.1)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [
            { name: '非常不可信', max: 1 },
            { name: '不可信', max: 1 },
            { name: '可信', max: 1 },
            { name: '非常可信', max: 1 }
                  
          ]
        },
        tooltip: {},
        legend: {
          left: 'center',
          bottom: '10',
          data: ['平均侧面数',  '平均到课率', '平均重复率']
          //data: ['非常不可信', '不可信', '可信', '非常可信']
          
        },
        series: [{
          type: 'radar',
          symbolSize: 0,
          center: ['50%', '50%'],
          
          data: [

            {
              value: [0.0179, 0.08, 0.161, 0.589],
              name: '平均侧面数'
            },
            
            {
              value: [0.8661, 0.9218, 0.9298, 0.9369],
              name: '平均到课率'
            },
            {
              value: [0.42, 0.5457, 0.373, 0.23],
              name: '平均重复率'
            }
            

          ],
          animationDuration: animationDuration
        }]
      })
    }
  }
}
</script>

































