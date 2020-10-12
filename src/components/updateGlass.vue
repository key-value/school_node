<template>
  <el-dialog :visible.sync="show" width="390px" @close="closeDialog">
    <el-form :model="formData" label-width="80px" :rules="formRule" style="max-width: 600px; max-height: 200px">
      <el-form-item label="班级名称">
        <el-input v-model="formData.glassName"></el-input>
      </el-form-item>
      <el-form-item label="学期">
        <el-select v-model="formData.gradeId" placeholder="请选择">
          <el-option v-for="item in gradeList" :key="item.id" :label="item.gradeNum" :value="item.id">
            <span style="float: left">{{ item.gradeNum }}</span>
            <span style="float: right; color: #8492a6">{{ item.sign }}</span>
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="submit-btns">
        <div style="line-height: 64px; text-align: center">
          <el-button type="primary" @click="onSubmit" style="width: 84px">保存</el-button>
          <el-button @click="cannel" style="width: 84px">返回</el-button>
        </div>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { Reg } from '@/lib/PassReg';
import { update, add } from '@/api/glass';
import { getList } from '@/api/grade';
@Component({
  components: {},
})
export default class updateGlass extends Vue {
  formData = { gradeId: 0, id: 0, glassName: '' };
  formRule = {
    sign: [
      {
        required: true,
        validator: (rule: any, value: any, callback: any) => {
          if (!value) {
            return callback(new Error(`学期编号不能为空`));
          }
          if (Reg.WhiteSpaceReg.test(value)) {
            return callback(new Error(`学期编号不能为空`));
          }
          return callback();
        },
        trigger: 'blur',
      },
    ],
  };

  gradeList: Array<any> = [];

  @Prop()
  value: any;

  show: boolean = false;

  @Prop()
  visible: boolean = false;

  @Watch('visible', { deep: true, immediate: true })
  OnVisibleChange() {
    this.show = this.visible;
  }

  @Watch('value', { deep: true, immediate: true })
  OnValueChange() {
    this.formData = this.value;
  }

  async onSubmit() {
    let result = null;
    if (this.formData.id === 0) {
      result = await add(this.formData);
    } else {
      result = await update(this.formData);
    }
    this.cannel();
  }
  cannel() {
    this.$emit('update:visible', false);
  }

  closeDialog() {
    this.$emit('update:visible', false);
  }

  async created() {
    let result = await getList({});
    this.gradeList = result.items;
  }
}
</script>
<style lang="scss" scoped></style>
