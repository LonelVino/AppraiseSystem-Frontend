<template>
<div>
<sencond_radar></sencond_radar>
  <div :class="className" :style="{height:height,width:width}" />
</div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
//import resize from './mixins/resize'

export default {
  //mixins: [resize],
  components: {
            sencond_radar,
            },
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
       title: { 
        text: '                            Comparison of scores in first-level indexes'

    },
    tooltip: {},
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Original', 'reliable','Supervisor']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: 'teaching content', max: 100},
           { name: 'teaching means', max: 100},
           { name: 'teaching attitude', max: 100},
           { name: 'teaching effect', max: 100}
        ]
    },
    series: [{
        name: '',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [89.09, 89.39, 88.94, 89.24],
                name : 'Original'
            },
             {
                value : [93.33, 86.67, 92.16,83.33],
                name : 'reliable'
            },
             {
                value : [100.00,86.70,80.00,80.00],
                name : 'Supervisor'
            }
        ]
    }]
      })
    }
  }
}
</script>
