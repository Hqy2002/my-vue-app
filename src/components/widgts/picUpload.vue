<template>
  <el-upload
      class="upload-demo"
      action="/upload"
      :show-file-list="false"
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
  >
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2MB</div>
  </el-upload>
</template>

<script>
import { defineComponent } from 'vue';
import { ElUpload, ElButton, ElUploadDragger } from 'element-plus';

export default defineComponent({
  components: {
    ElUpload,
    ElButton,
    ElUploadDragger,
  },
  methods: {
    handleSuccess(response, file, fileList) {
      console.log(response);
    },
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG/PNG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
  },
});
</script>