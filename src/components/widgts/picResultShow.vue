<template>
  <div class="image-wrapper">
    <div class="image-container">
      <img :src="imageUrl" alt="image" />
    </div>
    <el-button type="primary" @click="handleGetImage">获取图片</el-button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ElButton } from 'element-plus';

export default defineComponent({
  components: {
    ElButton,
  },
  data() {
    return {
      imageUrl: '',
    };
  },
  methods: {
    async handleGetImage() {
      try {
        const response = await fetch('your-backend-api-url');
        const imageData = await response.blob();
        this.imageUrl = URL.createObjectURL(imageData);
      } catch (error) {
        console.error(error);
        this.$message.error('获取图片失败');
      }
    },
  },
});
</script>

<style scoped>
.image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.image-container {
  width: 400px;
  height: 400px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>