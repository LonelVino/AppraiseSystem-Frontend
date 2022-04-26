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
      "textStyle": {
"fontSize": 15,
"color": "#005eb2",
"fontFamily": "Microsoft YaHei"
},
       title: {
        text: '评论长度和评分分布',
        subtext: '',
        x:'center',
        textStyle: {


fontSize:'30'
}
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
   
    legend: {
          x: '20%',
          top: '7%',
          textStyle: {
            color: '#000000',
            fontSize: '25'
          },
          data:['平均评论长度','评分方差'],
        },
  
    xAxis: [
        {
            type: 'category',
            data: ['非常不可信','不可信','可信','非常可信'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
            
            textStyle: {
                
                fontSize:'16'
              
                
            }
        },

            fontSize: '20'
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 35,
            interval: 10,
            axisLabel: {
                formatter: '{value} ',
                textStyle: {
                
                fontSize:'20'
              
                
            }
            }
        },
       
    ],
    series: [
        {
            name:'平均评论长度',
            type:'line',
            data:[2.61, 3.97, 8.04, 33.85],
            
            smooth: true
        },
         {
            name:'评分方差',
            type:'line',
            data:[3.81, 3.95, 4.78, 5.63],
            smooth: true
        }
         
        
    ]
      })
    }
  }
}
</script>
