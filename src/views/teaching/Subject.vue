<template>
  <div class="flextable">
    <el-card class="box-card ft24" v-for="(item, index) in 4" :key="index">
      <div slot="header" class="clearfix">
        <span>学科 {{index}}</span>
        <el-button class="operation-button" type="text">删除</el-button>
        <el-button class="operation-button" type="text">更新</el-button>
      </div>
      <div class="text item">201{{index}}级</div>
    </el-card>
    <el-card class="box-card ft24">
      <div class="text item">这里是增加</div>
    </el-card>
  </div>
</template>


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

<script>
import { Component, Vue, Provide } from 'vue-property-decorator';
@Component({})
export default class Subject extends Vue {}
</script>