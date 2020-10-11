<template>
  <div>
    <el-table :data="glassData">
      <el-table-column width="100" prop="id" label="序号"></el-table-column>
      <el-table-column prop="glassName" label="班级"></el-table-column>
      <el-table-column prop="gradeNum" label="入学年级"></el-table-column>
      <el-table-column prop="gradeName" label="当前学期"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="showAdd(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="size"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
    <updateGlass :visible.sync="visible" v-model="selectGlass"></updateGlass>
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import { glass } from '@/api/school';
import { Component, Vue, Provide } from 'vue-property-decorator';
import updateGlass from '@/components/updateGlass.vue';
@Component({ components: { updateGlass } })
export default class Glass extends Vue {
  glassData: any = [];
  selectGlass: any = {};
  page: number = 0;
  size: number = 10;
  total: number = 0;
  visible: boolean = false;
  grade: any = {};

  public async created() {
    this.getData();
  }
  async getData() {
    const result = await glass.getListAndGrade({ page: this.page, size: this.size });
    this.grade = result.grade as any;
    this.total = result.count;
    let glassList: any = [];
    for (const item of result.items) {
      let glassItem = item;
      let gradeItem = this.grade[item.gradeId];
      if (gradeItem) {
        glassItem.gradeName = gradeItem.sign;
        glassItem.gradeNum = gradeItem.gradeNum;
      }
      glassList.push(glassItem);
    }
    this.glassData = glassList;
  }

  handleSizeChange(val: any) {
    this.size = val;
    this.getData();
  }
  handleCurrentChange(val: any) {
    this.page = val;
    this.getData();
  }
  del(row: any) {
    this.$confirm('确认删除?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    })
      .then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!',
        });
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除',
        });
      });
  }
  update(row: any) {
    console.log(row);
  }
  showAdd(row: any) {
    if (row) {
      this.selectGlass = row;
    } else {
      this.selectGlass = { teacherName: '', id: 0 };
    }
    console.log(this.visible);
    this.visible = true;
  }
}
</script>
