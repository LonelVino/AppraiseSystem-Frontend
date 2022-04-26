<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
//import resize from './mixins/resize'

export default {
  //mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '95%'
    },
    height: {
      type: String,
      default: '400px'
    },
    data: {
      type: Array,
      default() {
        return {
          "name": "建议",
    "children": [
        {
            "name": "教学态度",
            "children": [
                {
                     "name": "充分备课",
                     "value": 10
                },
                
                {
                    "name": "耐心讲解",
                    "value": 6
                },
                {
                    "name": "态度认真一些",
                    "value": 6
                },
                {
                    "name": "开展答疑",
                    "value": 6
                }

            ]
        },
        {
            "name": "教学内容",
            "children": [
                {"name": "多讲习题", "value": 20},
                {"name": "突出重点", "value": 20},
                {"name": "拓展课外知识", "value": 20},
                {"name": "多结合时事", "value": 20}

               
           ]
        },
        {
            "name": "教学方法",
            "children": [
                {"name": "减少提问", "value": 5},
                {"name": "板书清晰", "value": 3},
                {"name": "语速快一点", "value": 3},
                {"name": "放慢讲课", "value": 3}
               
           ]
        },
        {
            "name": "教学效果",
            "children": [
                {"name": "活跃气氛", "value": 2},
                {"name": "增加互动", "value": 9},
                {"name": "形式更生动", "value": 9},
                {"name": "提高趣味性", "value": 9}

                
            ]
        },
        {
            "name": "其他",
            "children": [
                {"name": "调整课表", "value": 12},
                {"name": "身体健康", "value": 8},
                {"name": "增加课时", "value": 12}
            ]
        }
    ]
        }
      }
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
        "fontSize": 25,
        "color": "#005eb2",
        "fontFamily": "Microsoft YaHei"
        },
        title: {
        text: '建议类教学指标体系',
        subtext: '',
        "textStyle": {
        "fontSize": 30
        
        },

    },
       tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    
    
    series:[
        {
            type: 'tree',

            name: 'tree1',

            data: [this.data],

            left: '2%',
            right: '2%',
            top: '8%',
            bottom: '20%',
            orient: 'vertical',
            "fontSize": 100,

            symbolSize: 10,

            label: {
                position: 'bottom',
                verticalAlign: 'middle',
                align: 'left',
                rotate:-30,
            },

            leaves: {
                label: {
                    
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    
                }
            },

            expandAndCollapse: true,

            animationDuration: 550,
            animationDurationUpdate: 750

        },
        
    ]

      })
    }
  }
}
</script>
