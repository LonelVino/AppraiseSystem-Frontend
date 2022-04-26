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
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    data: {
      type: Array,
      default() {
        return [
         
{name:"突出重点",value:10},
{name:"拓展课外知识",value:6},
{name:"多讲习题",value:4.3},
{name:"内容更丰富",value:2},
{name:"课程更生动",value:1.8},
{name:"开展答疑",value:10},
{name:"讲解仔细耐心",value:5},
{name:"增加作业",value:3.5},
{name:"充分备课",value:4},
{name:"作业多一些",value:1.6},
{name:"严格一点",value:3},
{name:"语速慢一点",value:5},
{name:"放慢",value:2},
{name:"声音大一点",value:7},
{name:"提高效率",value:1},
{name:"板书清晰一些",value:4},
{name:"增加趣味性",value:1},
{name:"互动多一些",value:1.6},
{name:"调动课堂氛围",value:2},
{name:"调整课表",value:5},
{name:"增加课时",value:3}

        ]
      }
    },
    title: {
      type: String,
      default: '班级建议词组词云',
      "textStyle": {
        "fontSize": 30
        
        }
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
          text: this.title,
          x: 'center',
          "textStyle": {
        "fontSize": 30
        
        }
        },

        backgroundColor: '#fff',
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },

        series: [
          {
            type: 'wordCloud',
            gridSize: 10,
            sizeRange: [14, 80],
            rotationRange: [0, 0],
            textStyle: {
              normal: {
                color: function() {
                  return (
                    'rgb(' +
                    Math.round(Math.random() * 255) +
                    ', ' +
                    Math.round(Math.random() * 255) +
                    ', ' +
                    Math.round(Math.random() * 255) +
                    ')'
                  )
                }
              }
            },
            left: 'center',
            top: 'center',
            right: null,
            bottom: null,
            width: '200%',
            height: '200%',
            data: this.data
          }
        ]

      })
    }
  }
}
</script>
