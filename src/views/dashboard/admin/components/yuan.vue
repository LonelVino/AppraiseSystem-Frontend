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
      default: '320px'
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
        text: '不同教学指标建议词组分布',
        subtext: '',
        left: 'right',
        "textStyle": {
"fontSize": 30

}

    },
        tooltip: {
        trigger: 'item'
    },
        
        legend: {
        orient: 'vertical',
        left: 'left',
    },
        series: [
          {
            name: '',
            type: 'pie',
            
            radius: '70%',
            
            data: [
              { value: 6, name: '教学态度' },
              { value: 20, name: '教学内容与水平' },
              { value: 13, name: '教学手段与方法' },
              { value: 8, name: '教学效果' },
              { value: 2, name: '其他' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
          }
        ]
      })
    }
  }
}
</script>
