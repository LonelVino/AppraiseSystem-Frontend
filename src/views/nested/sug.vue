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
      default: '100%'
    },
    height: {
      type: String,
      default: '800px'
    },
    data: {
      type: Array,
      default() {
        return {
          "name": "Suggest",
    "children": [
        {
            "name": "add",
            "children": [
                {
                     "name": "interaction",
                     "value": 10
                },
                
                {
                    "name": "interesting case",
                    "value": 6
                }
            ]
        },
        {
            "name": "slow down",
            "children": [
                {"name": "teaching progress", "value": 5},
                {"name": "speak speed", "value": 3}
               
           ]
        },
        {
            "name": "share",
            "children": [
                {"name": "important knowledge points", "value": 5},
                {"name": "learning experience", "value": 3}
               
           ]
        },
        {
            "name": "expand",
            "children": [
                {"name": "horizon", "value": 2},
                {"name": "extracurricular knowledge", "value": 9}
            ]
        },
        {
            "name": "mobilize",
            "children": [
                {"name": "class atmosphere", "value": 12},
                {"name": "students motivation", "value": 8}
            ]
        },
       
        {
           "name": "clear",
           "children": [
            {"name": "blackboard writing", "value": 10}
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
"fontSize": 20,
"color": "#005eb2",
"fontFamily": "Microsoft YaHei"
},
       tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    legend: {
        top: '2%',
        left: '3%',
        orient: 'vertical',
        data: [{
            name: '',
            icon: 'rectangle'
        } ,
        {
            name: 'tree2',
            icon: 'rectangle'
        }],
        borderColor: '#c23531'
    },
    series:[
        {
            type: 'tree',

            name: 'tree1',

            data: [this.data],

            top: '5%',
            left: '7%',
            bottom: '2%',
            right: '60%',
            "fontSize": 100,

            symbolSize: 15,

            label: {
                normal: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right'
                }
            },

            leaves: {
                label: {
                    normal: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
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
