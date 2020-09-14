<template>
  <div>
    <el-table>
      <el-table-column lable="序号"></el-table-column>
      <el-table-column label="班级"></el-table-column>
      <el-table-column label="年级"></el-table-column>
    </el-table>
  </div>
</template>


<style lang="scss" scoped>
</style>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import schoolApi from '@/api/school';
@Component({})
export default class Schedule extends Vue {}
</script>