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
      default: '148%'
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
       title: {
        text: 'Average reviews length and student average score under different credibility categories',
        subtext: ''
    },
        backgroundColor:'#FFFFFF',
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['Length','Student score'],
        x: 'center'

    },
    xAxis: [
        {
            type: 'category',
            data: ['very unreliable','unreliable','reliable','very reliable'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            interval: 10,
            axisLabel: {
                formatter: '{value} '
            }
        },
       
    ],
    series: [
        {
            name:'Length',
            type:'line',
            data:[2.61, 3.97, 8.04, 33.85],
            
            smooth: true
        },
         {
            name:'Student score',
            type:'line',
            data:[78.635, 78.572, 79.755, 80.198],
            smooth: true
        }
         
        
    ]
      })
    }
  }
}
</script>
