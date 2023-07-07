<template>
  <div>
    <el-button type="primary" @click="fetchImage">获取图片</el-button>
    <div v-if="imageUrl">
      <img :src="imageUrl" alt="处理后的图片" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      imageUrl: null,
    };
  },
  methods: {
    async fetchImage() {
      try {
        const response = await axios.get('your-api-url-here/images');
        this.imageUrl = response.data.url;
      } catch (error) {
        console.error('获取图片失败:', error);
      }
    },
  },
};
</script>