<template>
  <div>
    <el-table :data="glassData">
      <el-table-column width="100" prop="Id" label="序号"></el-table-column>
      <el-table-column prop="Name" label="班级"></el-table-column>
      <el-table-column prop="Grade" label="入学年级1"></el-table-column>
      <el-table-column label="当前学期"></el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
@Component({})
export default class Glass extends Vue {
  public glassData: any = [];

  async created() {
    console.log(`created`);
    this.glassData = JSON.parse(`[{"Id":1,"Name":"1","Grade":5}]`);
  }
}
</script>
