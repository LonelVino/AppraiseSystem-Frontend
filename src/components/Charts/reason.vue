<template>
<div>
<keyboard></keyboard>
<div id="visitorpie" class="visitorpie" style="width: 1100px;height:700px;margin:50px 0px 0px 300px;float:left"></div>

</div>
</template>

<script>

    import keyboard from '@/components/Charts/Keyboard'
    import echarts from 'echarts/lib/echarts';
    // 引入柱状图
    import 'echarts/lib/chart/pie';
    import 'echarts/lib/chart/bar';
    import 'echarts/lib/chart/radar';
    import 'echarts/lib/component/title';
    import 'echarts/lib/component/legend';
    
    
    export default {
        components: {
            keyboard,
            },
        mounted(){
            this.myChart = echarts.init(document.getElementById('visitorpie'));
            this.initData();
        },
        
        methods: {
            initData(){
    const option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['Teaching attitude','Teaching content and level','Teaching mean and method','Teaching effect','Overall result']

    },
    xAxis: [
        {
            type: 'category',
            data: ['0-20','21-40','41-60','61-70','71-75','76-80','81-85','86-90','91-95','96-100'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Num',
            min: 0,
            max: 60,
            interval: 10,
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '',
            min: 0,
            max: 60,
            interval: 5,
            axisLabel: {
                formatter: ''
            }
        }
    ],
    series: [
        {
            name:'Teaching attitude',
            type:'bar',
            data:[3, 1, 4, 5, 6, 56, 18, 28, 0, 32],
            smooth: true
        },
         {
            name:'Teaching content and level',
            type:'bar',
            data:[3, 1, 8, 12, 0, 58, 18, 35, 0, 35],
            smooth: true
        },
         {
            name:'Teaching mean and method',
            type:'bar',
            data:[3, 1, 2, 8, 4, 44, 8, 28, 16, 39],
            smooth: true
        },
        {
            name:'Teaching effect',
            type:'bar',
            data:[3, 1, 3, 12, 0, 57,0, 31, 0,46],
            smooth: true
        },
        {
            name:'Overall result',
            type:'bar',
            yAxisIndex: 1,
            data:[3, 1, 5, 3, 12, 40, 0, 17, 31, 41],
            smooth: true
        }
    ]
    };
                this.myChart.setOption(option);
            }
        },
        
    }
</script>



