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
      default: '400px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
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
        text: '全校不同学院评教文本可信度分布展示',
        subtext: '',
        x:'center',
         textStyle: {


fontSize:'30'
}
    },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            textStyle: {
              
              fontSize: 25
            }
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          borderWidth: 0,
          top: 50,
          bottom: 95,
          textStyle: {
           
            "fontSize": 25
          }
        },
        legend: {
          x: '5%',
          top: '13%',
          textStyle: {
          "fontSize": 25,
            color: '#000000'
          },
          data: ['非常不可信', '不可信', '可信', '非常可信']
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#90978'
              
            }
          },
          
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLabel: {
            interval: 0,
            textStyle: {
                
                fontSize:'25'
              
                
            }

          },

          data: ['医学院', '环境科学', '人居', '公共管理', ' 化工', '医学', '外语', '数统', '材料科学与工程', '法学', '生命', '电子信息工程', '电气工程', '管理', '经济与金融', '能源与动力', '航空航天', '软件工程', '食品']
        }],
        yAxis: [{
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#000000'
            }
          },
          axisTick: {
            show: false
          },
       
          axisLabel: {
            interval: 0,
            textStyle: {
                
                fontSize:'20'
              
                
            }

          },
          splitArea: {
            show: false
          }
        }],
        dataZoom: [{
          show: true,
          height: 50,
          xAxisIndex: [
            0
          ],
          bottom: 30,
          start: 10,
          end: 80,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle: {
            color: '#d3dee5'

          },
          textStyle: {
            color: '#fff' 
            },
          borderColor: '#90979c'

        }, {
          type: 'inside',
          show: true,
          height: 25,
          start: 1,
          end: 35
        }],
        series: [{
          name: '非常不可信',
          type: 'bar',
          stack: 'total',
          barMaxWidth: 75,
          barGap: '50%',
          itemStyle: {
            normal: {
              color: 'rgba(0,191,183,1)',
              label: {
                show: true,
                textStyle: {
                  color: '#000000',
                  fontSize:'20'

                 
                },
                position: 'inside',
                formatter(p) {
                  return p.value > 0 ? p.value : ''
                }
              }
            }
          },
          data: [
            0.092,
            0.039,
            0.037,
            0,
            0.01,
            0.063,
            0.076,
            0.166,
            0.051,
            0,
            0.008,
            0.069,
            0.098,
            0.194,
            0.022,
            0.202,
            0.054,
            0.008,
            0.029
          ]
        },
        {
          name: '不可信',
          type: 'bar',
          stack: 'total',
          itemStyle: {
            normal: {
              color: 'rgba(127,95,132,0.7)',
              barBorderRadius: 0,
              fontSize: 50,
              label: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#000000',
                  fontSize:'20'

                 
                },
                formatter(p) {
                  return p.value > 0 ? p.value : ''
                }
              }
            }
          },
          data: [
            0.674,
            0.655,
            0.51,
            0.51,
            0.771,
            0.778,
            0.639,
            0.568,
            0.635,
            0.595,
            0.747,
            0.601,
            0.689,
            0.494,
            0.66,
            0.523,
            0.54,
            0.652,
            0.7
          ]
        },
        {
          name: '可信',
          type: 'bar',
          stack: 'total',
          symbolSize: 10,
          symbol: 'circle',
          itemStyle: {
            normal: {
              color: 'rgba(100,149,237,1)',
              barBorderRadius: 0,
              "fontSize": 20,
              label: {
              textStyle: {
                  color: '#000000',
                  fontSize:'20'

                 
                },
                show: true,
                position: 'inside',
                formatter(p) {
                  return p.value > 0 ? p.value : ''
                }
              }
            }
          },
          data: [
            0.19,
            0.264,
            0.377,
            0.244,
            0.18,
            0.147,
            0.206,
            0.197,
            0.267,
            0.257,
            0.207,
            0.266,
            0.146,
            0.29,
            0.284,
            0.214,
            0.291,
            0.326,
            0.246
          ]
        },

        

        
        {
          name: '非常可信',
          type: 'bar',
          stack: 'total',
          itemStyle: {
            normal: {
              color: 'rgba(255,144,128,1)',
              barBorderRadius: 0,
              label: {
              textStyle: {
                  color: '#000000',
                  fontSize:'20'

                 
                },
                show: true,
                position: 'inside',
                formatter(p) {
                  return p.value > 0 ? p.value : ''
                }
              }
            }
          },
          data: [
            0.044,
            0.042,
            0.075,
            0.244,
            0.04,
            0.012,
            0.08,
            0.07,
            0.048,
            0.149,
            0.038,
            0.064,
            0.068,
            0.023,
            0.034,
            0.061,
            0.116,
            0.015,
            0.029
          ]
        }

        ]
      })
    }
  }
}
</script>
