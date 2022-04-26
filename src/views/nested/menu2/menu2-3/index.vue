<template>
<div>
<sencond_radar></sencond_radar>
<div id="visitorpie" class="visitorpie" style="width: 800px;height:800px;margin:100px 0px 0px 600px;float:left"></div>



</div>
</template>

<script>

    import sencond_radar from '@/views/nested/sencond_radar'
    import echarts from 'echarts/lib/echarts';
    // 引入柱状图
    import 'echarts/lib/chart/pie';
    import 'echarts/lib/chart/bar';
    import 'echarts/lib/chart/radar';
    import 'echarts/lib/component/title';
    import 'echarts/lib/component/legend';
    
    
    export default {
        components: {
            sencond_radar,
            },
        mounted(){
            this.myChart = echarts.init(document.getElementById('visitorpie'));
            this.initData();
        },
        //props: ['pieData'],
        methods: {
            initData(){
                const option = {
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
                };

                this.myChart.setOption(option);
            }
        },
        
    }
</script>



