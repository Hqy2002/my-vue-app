<template>
  <div>
    <el-upload
        action="your-api-url-here/upload"
        :show-file-list="false"
        accept=".jpg"
        @success="handleUploadSuccess"
    >
      <el-button  type="primary">点击上传</el-button>
    </el-upload>
    <div v-if="thumbnail">
      <img :src="thumbnail" alt="缩略图" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thumbnail: null,
    };
  },
  methods: {
    handleUploadSuccess(response, file) {
      this.thumbnail = URL.createObjectURL(file.raw);
    },
  },
};
</script>