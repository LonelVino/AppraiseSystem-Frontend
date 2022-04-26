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
         


{name:"语速慢一点",value:15},
{name:"放慢",value:20},
{name:"声音大一点",value:7},
{name:"教学方式更有趣",value:4},
{name:"板书清晰",value:4},
{name:"减少提问",value:2},
{name:"大声一点",value:5},
{name:"课堂提问多一点",value:2},
{name:"提高效率",value:17},
{name:"安排合理",value:2}


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
