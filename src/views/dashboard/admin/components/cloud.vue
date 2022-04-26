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
      default: '1200px'
    },
    height: {
      type: String,
      default: '500px'
    },
    data: {
      type: Array,
      default() {
        return [
         
{name:"突出重点",value:30},
{name:"讲课更丰富",value:29},
{name:"拓展课外知识",value:26},
{name:"多讲习题",value:19},
{name:"内容更丰富",value:15},
{name:"增加趣味性",value:11},
{name:"开展答疑",value:10},
{name:"互动多一些",value:12},
{name:"语速慢一点",value:15},
{name:"放慢",value:20},
{name:"讲解仔细耐心",value:16},
{name:"课程更生动",value:10},
{name:"教学内容更丰富",value:15},
{name:"条理化",value:19},
{name:"声音大一点",value:7},
{name:"调整课表",value:5},
{name:"教学方式更有趣",value:4},
{name:"板书清晰",value:4},
{name:"增加课时",value:3},
{name:"调动课堂气氛",value:3},
{name:"分享案例",value:3},
{name:"增加成绩考核",value:9},
{name:"结合案例",value:4},
{name:"增加作业",value:5},
{name:"结合实例",value:9},
{name:"调动积极性",value:3},
{name:"增加实用性",value:5},
{name:"充分备课",value:4},
{name:"生动一点",value:3},
{name:"加深认识",value:3},
{name:"清楚一点",value:1},
{name:"作业多一些",value:6},
{name:"严格一点",value:3},
{name:"多讲语法",value:2},
{name:"多讲解",value:11},
{name:"减少提问",value:2},
{name:"增加互动",value:9},
{name:"讲清楚原理",value:14},
{name:"结合实际应用",value:8},
{name:"尽量",value:7},
{name:"大声一点",value:5},
{name:"课堂提问多一点",value:2},
{name:"多互动",value:9},
{name:"增加考试",value:8},
{name:"避免拖堂",value:18},
{name:"不要重复",value:18},
{name:"讲解细致",value:5},
{name:"丰富一些",value:3},
{name:"时间多一些",value:3},
{name:"结合书本",value:13},
{name:"提高效率",value:17},
{name:"调动课堂氛围",value:21},
{name:"提高效率",value:20},
{name:"加强联系",value:16},
{name:"身体健康",value:4},
{name:"安排合理",value:2},
{name:"跟上思路",value:8}

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
