<template>
  <div class="dashboard-editor-container">

    
    <div style="margin:0 0 30px 0px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入课程编号进行建议词组查询" icon="el-icon-search">
            <el-button slot="append">查询</el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>

    

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="16">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      
    </el-row>

    
  </div>
</template>

<script>


import LineChart from '@/views/dashboard/admin/components/cloud1'
import RaddarChart from '@/views/dashboard/admin/components/TodoList'
import PieChart from '@/views/dashboard/admin/components/yuan'
//import BarChart from '@/views/dashboard/admin/components/yuan'
//import TransactionTable from '@/views/dashboard/admin/components/TodoList'
//import TodoList from '@/views/dashboard/admin/components/TodoList'
//import BoxCard from '@/views/dashboard/admin/components/TodoList'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    //GithubCorner,
    //PanelGroup,
    //sug,
    LineChart,
    RaddarChart,
    PieChart,
    //BarChart,
    //TransactionTable,
    //TodoList,
    //BoxCard
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
