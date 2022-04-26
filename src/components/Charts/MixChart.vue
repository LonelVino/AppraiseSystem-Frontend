<template>
<div>

<div class="demo-input-suffix" style="width: 200px;height:60px;margin:0px 0px 0px 0px;float:left">
属性方式：
  <el-input
    placeholder="请选择日期"
    suffix-icon="el-icon-date"
    v-model="input2">
  </el-input>
  <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input21">
  </el-input>
</div>
<Keyboard></Keyboard>
</div>
</template>

<script>
    import Keyboard from '@/components/Charts/Keyboard'
    export default {
        components: {
            Keyboard,
            },
        data() {
    return {
      input2: '',
      input21: ''
    }
  }
       
    }
</script>



