<template>
  <el-dialog :visible.sync="show" width="390px">
    <el-form
      :model="formData"
      label-width="80px"
      :rules="formRule"
      style="max-width:600px;max-height:200px;"
    >
      <el-form-item label="教师名称">
        <el-input v-model="formData.teacherName"></el-input>
      </el-form-item>
      <el-form-item class="submit-btns">
        <div style="line-height: 64px; text-align: center;">
          <el-button type="primary" @click="onSubmit" style="width:84px;">保存</el-button>
          <el-button @click="cannel" style="width:84px;">返回</el-button>
        </div>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { Reg } from '@/lib/PassReg';
import { updateTeacher, addTeacher } from '@/api/teacher';
@Component({
  components: {},
})
export default class UpdateTeacher extends Vue {
  formData = { teacherName: '', id: 0 };
  formRule = {
    Name: [
      {
        required: true,
        validator: (rule: any, value: any, callback: any) => {
          if (!value) {
            return callback(new Error(`教师名称不能为空`));
          }
          if (Reg.WhiteSpaceReg.test(value)) {
            return callback(new Error(`教师名称不能为空`));
          }
          return callback();
        },
        trigger: 'blur',
      },
    ],
  };

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
      result = await addTeacher(this.formData.teacherName);
    } else {
      result = await updateTeacher(this.formData);
    }
    this.cannel();
  }
  cannel() {
    this.$emit('update:visible', false);
  }
}
</script>
<style lang="scss" scoped></style>
