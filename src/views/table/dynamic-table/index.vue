<template>

  <div class="app-container">
 
    <div style="margin:0 0 5px 20px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入课程编号进行可信度查询" icon="el-icon-search">
            <el-button slot="append">查询</el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <fixed-thead />

    
  </div>
</template>

<script>
import FixedThead from '@/views/table/dynamic-table/components/FixedThead'
import UnfixedThead from '@/views/table/dynamic-table/components/UnfixedThead'

export default {
  name: 'DynamicTable',
  components: { FixedThead, UnfixedThead }
}
</script>
