<template>
  <div id="app">
    <el-container>
      <el-aside>
        <image-uploader />
      </el-aside>
      <el-main>
        <el-row>
          <el-col :span="12">
            <image-display />
          </el-col>
          <el-col :span="12">
            <coordinates-form />
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ImageUploader from './components/ImageUploader.vue';
import ImageDisplay from './components/ImageDisplay.vue';
import CoordinatesForm from './components/CoordinatesForm.vue';

export default {
  components: {
    ImageUploader,
    ImageDisplay,
    CoordinatesForm,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

el-container,
el-aside,
el-main {
  height: 100%;
}

el-aside {
  width: 300px;
  padding: 20px;
}

el-row {
  padding: 20px;
}
</style>