<template>
  <div class="app-container">
    <el-table :key="key" :data="tableData" border fit highlight-current-row style="width: 100%">
      <el-table-column prop="name" label="序号" width="180" />
      <el-table-column v-for="fruit in formThead" :key="fruit" :label="fruit">
        <template slot-scope="scope">
          {{ scope.row[fruit] }}
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page='1'
        :page-sizes="[1, 2, 5, 10]"
        :page-size='10'
        layout="total, sizes, prev, pager, next, jumper"
        :total='43'
      ></el-pagination>

      


  </div>
</template>

<script>
const defaultFormThead = ['学年学期', '学生学号','教师编号','评教文本','可信度等级']

export default {
  data() {
    return {
      tableData: [
        {
          name: '1',
          学年学期: '2019-2',
          学生学号: '2180100007',
          教师编号: '1012054',
          课程编号:'COMP203012',
          评教文本:'老师风趣幽默，概念讲述生动有趣，但对具体题目分析不够详细，听不懂。',
          可信度等级:'4'
        },
        {
          name: '2',
          学年学期: '2019-2',
          学生学号: '2180100021',
          教师编号: '1012054',
          课程编号:'COMP203012',
          评教文本:'老师很负责，善于启发思维',
          可信度等级:'3'
        },
        {
          name: '3',
          学年学期: '2019-2',
          学生学号: '2180100010',
          教师编号: '1012054',
          课程编号:'COMP203012',
          评教文本:'这门课让我收获很多并且对我的思维能力有很大的提高',
          可信度等级:'2'
        },
        {
          name: '4',
          学年学期: '2019-2',
          学生学号: '2180100017',
          教师编号: '1012054',
          课程编号:'COMP203012',
          评教文本:'很好',
          可信度等级:'1'
        },
        {
          name: '5',
          学年学期: '2019-2',
          学生学号: '2180100020',
          教师编号: '1012054',
          课程编号:'COMP203012',
          评教文本:'希望学校取消该课 不适合我们学习特别是在上学期大学计算机基础被学校万能的翻转课堂翻转以后 更加丧失信心',
          可信度等级:'4'
        },
        {
          name: '6',
          学年学期: '2019-2',
          学生学号: '2180100014',
          教师编号: '1012054',
          课程编号:'COMP203012',
          评教文本:'老师上课有点严肃',
          可信度等级:'3'
        },
        {
          name: '7',
          学年学期: '2019-2',
          学生学号: '2180100000',
          教师编号: '1012054',
          课程编号:'COMP203012',
          评教文本:'老师讲解耐心，为人和善',
          可信度等级:'3'
        },
        {
          name: '8',
          学年学期: '2019-2',
          学生学号: '2180100002',
          教师编号: '1012054',
          课程编号:'COMP203012',
          评教文本:'老师人好',
          可信度等级:'1'
        },
        {
          name: '9',
          学年学期: '2019-2',
          学生学号: '2180100036',
          教师编号: '1012054',
          课程编号:'COMP203012',
          评教文本:'老师专业知识十分扎实',
          可信度等级:'4'
        },
        {
          name: '10',
          学年学期: '2019-2',
          学生学号: '2180100018',
          教师编号: '1012054',
          课程编号:'COMP203012',
          评教文本:'老师认真',
          可信度等级:'1'
        }
        
      ],
      key: 1, // table key
      formTheadOptions: ['学年学期', '学生学号','教师编号','评教文本','可信度等级'],
      checkboxVal: defaultFormThead, // checkboxVal
      formThead: defaultFormThead // 默认表头 Default header
    }
  },
  watch: {
    checkboxVal(valArr) {
      this.formThead = this.formTheadOptions.filter(i => valArr.indexOf(i) >= 0)
      this.key = this.key + 1// 为了保证table 每次都会重渲 In order to ensure the table will be re-rendered each time
    }
  }
}
</script>

