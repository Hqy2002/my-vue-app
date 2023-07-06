<template>
  <div class="register-wrapper">
    <div class="register-form">
      <h2 class="register-title">用户注册</h2>
      <el-form :model="registerForm" ref="registerForm" :rules="registerRules" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="registerForm.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input v-model="registerForm.confirmPassword" type="password" placeholder="请确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';

export default defineComponent({
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
  },
  data() {
    return {
      registerForm: {
        username: '',
        password: '',
        confirmPassword: '',
      },
      registerRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        confirmPassword: [
          { required: true, message: '请确认密码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value !== this.registerForm.password) {
                callback(new Error('两次输入的密码不一致'));
              } else {
                callback();
              }
            },
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    handleRegister() {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          // 注册逻辑，这里只做演示
          this.$message.success('注册成功');
        } else {
          this.$message.error('请填写完整的注册信息');
          return false;
        }
      });
    },
  },
});
</script>

<style scoped>
.register-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.register-form {
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.register-title {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
</style>