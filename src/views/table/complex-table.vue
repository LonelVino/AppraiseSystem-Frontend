<template>


  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts them
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
      default: '50%'
    },
    height: {
      type: String,
      default: '1000px'
    },
    data: {
      type: Array,
      default() {
        return [
          { name: 'hhh', value: 690 },
          { name: '喜欢', value: 545 },
          { name: '认真', value: 522 },
          { name: '有趣', value: 460 },
          { name: '互动', value: 370 },
          { name: '负责', value: 340 },
          { name: '讲解', value: 340 },
          { name: '幽默', value: 290 },
          { name: '生动', value: 248 },
          { name: '耐心', value: 248 },
          { name: '交流', value: 207 },
          { name: '风趣', value: 207 },
          { name: '活跃', value: 193 },
          { name: '丰富', value: 190 },
          { name: '收获', value: 176 },
          { name: '详细', value: 135 },
          { name: '温柔', value: 134 },
          { name: '提高', value: 134 },
          { name: '优秀', value: 132 },
          { name: '生动有趣', value: 130 },
          { name: '细致', value: 126 },
          { name: '兴趣', value: 124 },
          { name: '清晰', value: 117 },
          { name: '完美', value: 109 },
          { name: '氛围', value: 108 },
          { name: '加强', value: 103 },
          { name: '教导', value: 95 },
          { name: '能力', value: 95 },
          { name: '热情', value: 90 },
          { name: '增加', value: 90 },
          { name: '帮助', value: 86 },
          { name: '调动', value: 83 },
          { name: '严格', value: 82 },
          { name: '激情', value: 80 },
          { name: '启发', value: 79 },
          { name: '思考', value: 75 },
          { name: '清楚', value: 74 },
          { name: '理解', value: 73 },
          { name: '了解', value: 70 },
          { name: '提问', value: 70 },
          { name: '拓展', value: 69 },
          { name: '用心', value: 69 },
          { name: '通俗易懂', value: 69 },
          { name: '结合', value: 66 },
          { name: '注重', value: 66 },
          { name: '积极性', value: 64 },
          { name: '可爱', value: 63 },
          { name: '知识点', value: 61 },
          { name: '例子', value: 60 },
          { name: '充分', value: 59 },
          { name: '备课', value: 59 },
          { name: '风格', value: 59 },
          { name: '气氛', value: 58 },
          { name: '形象', value: 57 },
          { name: '严谨', value: 56 },
          { name: '激发', value: 56 },
          { name: '重点', value: 55 },
          { name: '仔细', value: 55 },
          { name: '充实', value: 55 },
          { name: '关心', value: 52 },
          { name: '形式', value: 51 },
          { name: '解答', value: 50 },
          { name: '到位', value: 49 },
          { name: '积极', value: 48 },
          { name: 'nice', value: 48 },
          { name: '专业', value: 47 },
          { name: '亲切', value: 47 },
          { name: '思路清晰', value: 47 },
          { name: '教学方式', value: 46 },
          { name: '锻炼', value: 45 },
          { name: '细心', value: 45 },
          { name: '答疑', value: 45 },
          { name: '有用', value: 45 },
          { name: '和蔼', value: 45 },
          { name: '平易近人', value: 44 },
          { name: '具体', value: 44 },
          { name: '轻松', value: 44 },
          { name: '合理', value: 43 },
          { name: '精彩', value: 43 },
          { name: '和蔼可亲', value: 41 },
          { name: '无可挑剔', value: 40 },
          { name: '节奏', value: 35 },
          { name: '全面', value: 35 },
          { name: '思维', value: 32 },
          { name: '循循善诱', value: 31 },
          { name: '举例', value: 31 },
          { name: '棒棒', value: 31 },
          { name: '技巧', value: 31 },
          { name: '深度', value: 31 },
          { name: '环节', value: 31 },
          { name: '严格要求', value: 30 },
          { name: '深入浅出', value: 30 },
          { name: '活泼', value: 30 },
          { name: '很强', value: 30 },
          { name: '参与度', value: 30 },
          { name: '深入', value: 30 },
          { name: '课本', value: 29 },
          { name: '管理', value: 29 },
          { name: '吸引', value: 29 },
          { name: '引导', value: 29 },
          { name: '实践', value: 28 },
          { name: '生动活泼', value: 28 },
          { name: '例题', value: 28 },
          { name: '及时', value: 28 },
          { name: '条理清晰', value: 28 }
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
