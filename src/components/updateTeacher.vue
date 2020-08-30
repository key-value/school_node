<template>
  <el-dialog>
    <el-form :model="formData" label-width="80px" size="small" style="max-height:700px;">
      <el-form-item lable="教师名称">
        <el-input v-model="Name"></el-input>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
 <script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { Reg } from '@/lib/PassReg';
import { updateTeacherList, addTeacherList } from '@/api/school';
@Component({
  components: {},
})
export default class updateTeacher extends Vue {
  formData = { Name: '', Id: 0 };
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
}
</script>
  <style lang="scss" scoped></style>