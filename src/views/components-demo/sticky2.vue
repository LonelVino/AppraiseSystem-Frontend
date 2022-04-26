<template>
  <div>
    <sticky :z-index="10" class-name="sub-navbar">
      <el-dropdown trigger="click">
        <el-button plain>
          Semester<i class="el-icon-caret-bottom el-icon--right" />
        </el-button>
        <el-dropdown-menu slot="dropdown" class="no-border">
          <el-checkbox-group v-model="semesters" style="padding: 5px 15px;">
            <el-checkbox v-for="item in platformsOptions" :key="item.key" :label="item.key">
              {{ item.name }}
            </el-checkbox>
          </el-checkbox-group>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown trigger="click">
        <el-button plain>
          Feng Tian<i class="el-icon-caret-bottom el-icon--right" />
        </el-button>
        <el-dropdown-menu slot="dropdown" class="no-padding no-border" style="width:300px">
          <el-input v-model="url" placeholder="Please enter the content">
            <template slot="prepend">
             Name
            </template>
          </el-input>
        </el-dropdown-menu>
      </el-dropdown>

      <div class="time-container">
        <el-input v-model="time" placeholder="Data Mining">

        </el-input>
      </div>

      <el-button style="margin-left: 10px;" type="success" @click='onclick'>
        check
      </el-button>
    </sticky>

    <div class="components-container">
      <aside>
        Reminder: Only administrators are allowed. DO not leak the information!
      </aside> 
    </div>
    <gain v-if='showcom' margin='800px 0px 0px 0px'></gain>
    
    </div>
</template>

<script>
import Sticky from '@/components/Sticky'

import gain from '@/views/nested/menu1/menu1-1/index'

export default {
  name: 'StickyDemo',
  components: { Sticky, gain},
  data() {
    return {
      showcom:false,
      showcom1:false,
      time: '',
      url: '',
      semesters: ['a-platform'],
      platformsOptions: [
        { key: 'a-platform', name: '2017 first semester' },
        { key: 'b-platform', name: '2017 sencond semester' },
        { key: 'c-platform', name: '2018 first semester' }
      ],
     
    }
  },
  methods:{onclick: function () {this.showcom=true, this.showcom1=true}}
  
}
</script>

<style scoped>
.components-container div {
  margin: 10px;
}

.time-container {
  display: inline-block;
}
</style>
