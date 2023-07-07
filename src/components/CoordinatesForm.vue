<template>
  <div>
    <el-form @submit="submitForm">
      <el-form-item label="经度">
        <el-input v-model="longitude" placeholder="请输入经度" />
      </el-form-item>
      <el-form-item label="纬度">
        <el-input v-model="latitude" placeholder="请输入纬度" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      longitude: '',
      latitude: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        await axios.post('your-api-url-here/coordinates', {
          longitude: this.longitude,
          latitude: this.latitude,
        });
        this.longitude = '';
        this.latitude = '';
      } catch (error) {
        console.error('提交经纬度失败:', error);
      }
    },
  },
};
</script>