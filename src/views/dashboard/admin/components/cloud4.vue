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
      default: '400px'
    },
    data: {
      type: Array,
      default() {
        return [
         

{name:"增加趣味性",value:11},
{name:"互动多一些",value:12},
{name:"课程更生动",value:10},
{name:"教学方式更有趣",value:4},
{name:"调动课堂气氛",value:3},
{name:"调动积极性",value:3},
{name:"生动一点",value:3},
{name:"增加互动",value:9},
{name:"课堂提问多一点",value:2},
{name:"多互动",value:9},
{name:"调动课堂氛围",value:21},
{name:"提高效率",value:20},


        ]
      }
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
          text: this.title,
          x: 'center'
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
