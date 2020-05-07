<template>
  <div>
    <el-table :v-model="tableData">
      <el-table-column lable="序号"></el-table-column>
      <el-table-column label="班级"></el-table-column>
      <el-table-column label="入学年级"></el-table-column>
      <el-table-column label="当前学期"></el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
@Component({})
export default class Glass extends Vue {
  @Provide() tableData: any; // 门店选择框的展示标志
}
</script>
