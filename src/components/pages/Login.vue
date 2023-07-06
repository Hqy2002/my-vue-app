
<template>
  <div class="login-wrapper">
    <div class="login-form">
      <h2 class="login-title">用户登录</h2>
      <el-form :model="loginForm" ref="loginForm" :rules="loginRules" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="login-register">
        <span>没有账号？</span>
        <a @click.prevent="handleRegister">立即注册</a>
      </div>
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
      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 登录逻辑，这里只做演示
          this.$message.success('登录成功');
        } else {
          this.$message.error('请填写完整的登录信息');
          return false;
        }
      });
    },
    handleRegister() {
      // 跳转到注册页面
      this.$router.push('/register');
    },
  },
});
</script>

<style scoped>
.login-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-form {
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-title {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.login-register {
  margin-top: 20px;
  text-align: center;
}

.login-register span {
  margin-right: 10px;
}

.login-register a {
  color: #409EFF;
  text-decoration: none;
  cursor: pointer;
}

.login-register a:hover {
  text-decoration: underline;
}
</style>