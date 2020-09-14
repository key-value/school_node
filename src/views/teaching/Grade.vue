<template>
  <div class="flextable">
    <el-card class="box-card ft24" v-for="(item, index) in 4" :key="index">
      <div slot="header" class="clearfix">
        <span>学期 {{index+1}}</span>
        <el-button class="operation-button" type="text">删除</el-button>
        <el-button class="operation-button" type="text">更新</el-button>
      </div>
      <div class="text item">201{{index}}级</div>
    </el-card>
    <el-card class="box-card ft24">
      <div class="text item">这里是增加</div>
    </el-card>
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
  </div>
</template>
<script lang="ts">
// import { grade } from '@/api/school';
import { Component, Vue, Provide } from 'vue-property-decorator';
@Component({})
export default class Grade extends Vue {
  glassData: any = [];
  selectGlass: any = {};
  page: number = 0;
  size: number = 10;
  total: number = 0;
  visible: boolean = false;

  public async created() {
    this.getData();
  }
  async getData() {
    const result = { items: [], count: 1 }; // await glass.getList({ page: this.page, size: this.size });
    this.glassData = result.items;
    this.total = result.count;
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
  showAdd(row: any) {
    if (row) {
      this.selectGlass = row;
    } else {
      this.selectGlass = { teacherName: '', id: 0 };
    }
    this.visible = true;
  }
}
</script>
<style lang="scss" scoped>
.box-card {
  width: 320px;
  line-height: 50px;
  margin: 5px;
  min-height: 200px;
}
.operation-button {
  float: right;
  padding: 3px 0;
  margin: 0px 5px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
.text {
  font-size: 14px;
  line-height: 60px;
}

.item {
  margin-bottom: 18px;
}
.flextable {
  display: flex;
  flex-wrap: wrap;
}
</style>

