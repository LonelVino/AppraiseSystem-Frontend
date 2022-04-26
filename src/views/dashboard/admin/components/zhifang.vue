
<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

//const animationDuration = 6000

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
      backgroundColor:'#FFFFFF',
        title: {
        text: '不同评价指标下建议词组数量分布',
        subtext: '',
         x:'center',
        "textStyle": {
        "fontSize": 30
        
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 1],
        
        axisLabel: {
            interval: 0,
            textStyle: {
                
                fontSize:'20'
              
                
            }

          }
        
        
    },
    yAxis: {
        type: 'category',
         axisLabel: {
            interval: 0,
            textStyle: {
                
                fontSize:'25'
              
                
            }

          },
       
        
        
        data: ['教学态度','教学内容','教学方法','教学效果','其他']
    },
    
    series: [
        {
            name: '建议词组数',
            type: 'bar',
            data: [0.13, 0.33, 0.29, 0.21,0.04]
        }
        
    ]
      })
    }
  }
}
</script>
