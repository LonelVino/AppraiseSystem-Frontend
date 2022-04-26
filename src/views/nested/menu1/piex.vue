<template>
  <div>
    <div :id="id" :class="className" :style="{height:height,width:width,margin:margin}" />
  </div>
</template>

<script>

import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme

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
      default: '1100px'
    },
    height: {
      type: String,
      default: '1000px'
    },
     margin:{
      type: String,
      default: '0px 0px 0px 500px'
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
      
        title:{
        text:'Positive review',
        x: 'center'
        },
        tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['teaching attitude','teaching content','teaching mean and method','teaching effect','strict','blackboard writing','grasp progress','answer','attitude','harvest','atmosphere','clear','highlights','rich']
    },
    series: [
        {
            name:'first-level index',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:1, name:'teaching mean and method'},
                {value:40, name:'teaching attitude'},
                {value:25, name:'teaching content'},
                {value:9, name:'teaching effect'}
            ]
        },
        {
            name:'second-level index',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:1, name:'grasp progress'},
                {value:0, name:'blackboard writing'},
                {value:20, name:'strict'},
                {value:2, name:'answer'},
                {value:18, name:'attitude'},
                {value:10, name:'highlights'},
                {value:11, name:'rich'},
                {value:4, name:'clear'},
                {value:9, name:'harvest'},
                {value:0, name:'atmosphere'}
           
            ]
        }
    ]

      })
    }
  }
}
</script>



