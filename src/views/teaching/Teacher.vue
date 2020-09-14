<template>
  <div>
    <div class="flextable">
      <el-card class="box-card ft24">
        <div class="text item" @click="showAdd()">这里是增加</div>
      </el-card>
      <el-card class="box-card ft24" v-for="(item, index) in teacherData" :key="index">
        <div slot="header" class="clearfix">
          <span>{{ item.teacherName }}</span>
          <el-button class="operation-button" @click="del" type="text">删除</el-button>
          <el-button class="operation-button" @click="showAdd(item)" type="text">更新</el-button>
        </div>
        <div class="text item">这里是内容</div>
      </el-card>
    </div>
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
    <UpdateTeacher :visible.sync="visible" v-model="selectTeacher"></UpdateTeacher>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import { getTeacherList } from '@/api/teacher';
import UpdateTeacher from '@/components/updateTeacher.vue';
@Component({ components: { UpdateTeacher } })
export default class Teacher extends Vue {
  teacherData: any[] = [];
  selectTeacher: any = {};
  page: number = 0;
  size: number = 10;
  total: number = 0;
  visible: boolean = false;

  public async created() {
    this.getTeacherData(); //监听浏览器宽度的改变
    let that = this;
    window.onresize = function () {
      that.changeMargin();
    };
  }
  async changeMargin() {
    //获取网页可见区域宽度
    let docWidth = document.body.clientWidth;
    console.log(docWidth);
  }
  async getTeacherData() {
    const result = await getTeacherList({ page: this.page, size: this.size });
    this.teacherData = result.items;
    this.total = result.count;
  }

  handleSizeChange(val: any) {
    this.size = val;
    this.getTeacherData();
  }
  handleCurrentChange(val: any) {
    this.page = val;
    this.getTeacherData();
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
      this.selectTeacher = row;
    } else {
      this.selectTeacher = { teacherName: '', id: 0 };
    }
    this.visible = true;
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  // max-width: 350px;
  // min-width: 250px;
  width: 18%;
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
.block {
  margin: 20px auto;
}
</style>
