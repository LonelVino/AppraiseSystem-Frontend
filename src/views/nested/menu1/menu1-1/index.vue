<template>
<div>
<piex></piex>
<div id="visitorpie" class="visitorpie" style="width: 1100px;height:1000px;margin:10px 0px 0px 500px;float:left"></div>

</div>
</template>

<script>

    import piex from '@/views/nested/menu1/piex'
    import echarts from 'echarts/lib/echarts';
    // 引入柱状图
    import 'echarts/lib/chart/pie';
    import 'echarts/lib/chart/bar';
    import 'echarts/lib/chart/radar';
    import 'echarts/lib/component/title';
    import 'echarts/lib/component/legend';
    
    
    export default {
        components: {
            piex,
            },
        mounted(){
            this.myChart = echarts.init(document.getElementById('visitorpie'));
            this.initData();
        },
        //props: ['pieData'],
        methods: {
            initData(){
    const option = {
    title:{
        text:'Negative review',
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
            name:'',
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
                {value:18, name:'teaching mean and method'},
                {value:3, name:'teaching attitude'},
                {value:5, name:'teaching content'},
                {value:20, name:'teaching effect'}
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
                {value:3, name:'grasp progress'},
                {value:15, name:'blackboard writing'},
                {value:0, name:'strict'},
                {value:3, name:'answer'},
                {value:0, name:'attitude'},
                {value:3, name:'highlights'},
                {value:0, name:'rich'},
                {value:2, name:'clear'},
                {value:4, name:'harvest'},
                {value:16, name:'atmosphere'}
           
            ]
        }
    ]
    };
                this.myChart.setOption(option);
            }
        },
        
    }
</script>



