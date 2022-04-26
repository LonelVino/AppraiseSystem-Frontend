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
      default: '600px'
    },
    height: {
      type: String,
      default: '700px'
    },
    data: {
      type: Array,
      default() {
        return [
          {name:"不会",value:768},
{name:"枯燥",value:758},
{name:"慢一点",value:619},
{name:"听不懂",value:596},
{name:"不够",value:569},
{name:"太快",value:535},
{name:"跟不上",value:521},
{name:"有点快",value:452},
{name:"不好",value:412},
{name:"严格",value:365},
{name:"放慢",value:348},
{name:"不清楚",value:276},
{name:"减少",value:262},
{name:"不懂",value:246},
{name:"慢点",value:245},
{name:"条理化",value:243},
{name:"来不及",value:213},
{name:"不能",value:191},
{name:"无聊",value:185},
{name:"听不清",value:176},
{name:"适当增加",value:171},
{name:"死板",value:170},
{name:"改进",value:163},
{name:"不太清楚",value:159},
{name:"不足",value:148},
{name:"不太好",value:145},
{name:"麻烦",value:139},
{name:"导致",value:130},
{name:"乏味",value:125},
{name:"慢一些",value:124},
{name:"生动一点",value:123},
{name:"简单",value:123},
{name:"清楚一点",value:116},
{name:"增加",value:116},
{name:"严格一点",value:103},
{name:"不用",value:102},
{name:"多讲解",value:101},
{name:"不到",value:99},
{name:"增加互动",value:99},
{name:"单调",value:98},
{name:"板书",value:98},
{name:"尽量",value:97},
{name:"大声一点",value:95},
{name:"难度",value:92},
{name:"多互动",value:89},
{name:"不清晰",value:89},
{name:"提前",value:88},
{name:"重复",value:88},
{name:"任务",value:85},
{name:"丰富一些",value:83},
{name:"很难",value:83},
{name:"容易走神",value:83},
{name:"照本宣科",value:80},
{name:"看不懂",value:71},
{name:"略显",value:69},
{name:"难以",value:66},
{name:"模糊",value:64},
{name:"主观",value:61},
{name:"影响",value:61},
{name:"很快",value:61},
{name:"拖堂",value:60},
{name:"不合理",value:60},
{name:"跟上",value:58},
{name:"不想",value:57},
{name:"重点不突出",value:53},
{name:"难懂",value:52},
{name:"生硬",value:52},
{name:"不行",value:52},
{name:"浪费",value:52},
{name:"一般",value:49}

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
