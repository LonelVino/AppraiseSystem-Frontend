<template>
  <div class="app-container">
    <div style="margin:0 0 30px 0px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入课程编号进行建议词组查询" icon="el-icon-search">
            <el-button slot="append">查询</el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <fixed-thead />
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
        :total='55'
      ></el-pagination>

      


  </div>
</template>

<script>
const defaultFormThead = ['学年学期', '学生学号','教师编号','评教文本','教学态度','教学内容','教学方法','教学效果','其他']

export default {
  data() {
    return {
      tableData: [
        {
          name: '1',
          学年学期: '2019-2',
          学生学号: '2180100123',
          教师编号: '1002391',
          课程编号:'ENPO330103',
          评教文本:'老师讲课时能结合实例进行解释，但希望老师讲课时多注重逻辑',
          教学态度:'',
          教学内容:'',
          教学方法:'注重逻辑',
          教学效果:'',
          其他:''
        },
        {
          name: '2',
          学年学期: '2019-2',
          学生学号: '2180100021',
          教师编号: '1002391',
          课程编号:'ENPO330103',
          评教文本:'希望老师平时也能多讲解一下习题',
          教学态度:'',
          教学内容:'多讲解习题',
          教学方法:'',
          教学效果:'',
          其他:''
        },
        {
          name: '3',
          学年学期: '2019-2',
          学生学号: '2180100100',
          教师编号: '1002391',
          课程编号:'ENPO330103',
          评教文本:'请活跃一下课堂气氛，提高学生的兴趣，课程内容突出一点。',
          教学态度:'',
          教学内容:'突出课程内容',
          教学方法:'',
          教学效果:'活跃课堂气氛',
          其他:''
        },
        {
          name: '4',
          学年学期: '2019-2',
          学生学号: '2180100016',
          教师编号: '1002391',
          课程编号:'ENPO330103',
          评教文本:'希望老师能传授一些技巧，感觉学生pre的时间太多了，而通常学生pre都没重点',
          教学态度:'',
          教学内容:'传授技巧',
          教学方法:'',
          教学效果:'',
          其他:''
        },
        {
          name: '5',
          学年学期: '2019-2',
          学生学号: '2180100005',
          教师编号: '1002391',
          课程编号:'ENPO330103',
          评教文本:'希望学校取消该课 不适合我们学习特别是在上学期大学计算机基础被学校万能的翻转课堂翻转以后 更加丧失信心',
          教学态度:'',
          教学内容:'',
          教学方法:'',
          教学效果:'',
          其他:'取消课'
        },
        {
          name: '6',
          学年学期: '2019-2',
          学生学号: '2180100101',
          教师编号: '1002391',
          课程编号:'ENPO330103',
          评教文本:'老师上课有点严肃',
          教学态度:'',
          教学内容:'',
          教学方法:'',
          教学效果:'',
          其他:''
        },
        {
          name: '7',
          学年学期: '2019-2',
          学生学号: '2180100000',
          教师编号: '1002391',
          课程编号:'ENPO330103',
          评教文本:'老师布置的作业稍微有点多，每次写quiz和准备口语活动有点密集。希望老师能稍微减轻一点作业量TAT。',
          教学态度:'',
          教学内容:'',
          教学方法:'减轻作业',
          教学效果:'',
          其他:''
        },
        {
          name: '8',
          学年学期: '2019-2',
          学生学号: '2180100008',
          教师编号: '1002391',
          课程编号:'ENPO330103',
          评教文本:'老师人好',
          教学态度:'',
          教学内容:'',
          教学方法:'',
          教学效果:'',
          其他:''
        },
        {
          name: '9',
          学年学期: '2019-2',
          学生学号: '2180100034',
          教师编号: '1002391',
          课程编号:'ENPO330103',
          评教文本:'老师备课充分一些，不要真正上课的时候浪费时间',
          教学态度:'充分一备课',
          教学内容:'',
          教学方法:'',
          教学效果:'',
          其他:''
        },
        {
          name: '10',
          学年学期: '2019-2',
          学生学号: '2180100032',
          教师编号: '1002391',
          课程编号:'ENPO330103',
          评教文本:'老师认真',
          教学态度:'',
          教学内容:'',
          教学方法:'',
          教学效果:'',
          其他:''
        }
        
        
      ],
      key: 1, // table key
      formTheadOptions: ['学年学期', '学生学号','教师编号','评教文本','教学态度','教学内容','教学方法','教学效果','其他'],
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

