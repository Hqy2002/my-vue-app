<template>
  <div id="app">
    <!-- 使用Bootstrap的container类来创建一个固定宽度的容器 -->
    <div class="container" style="width: 80vh;">
      <!-- 使用Bootstrap的row类来创建一个水平的布局 -->
      <div class="row">
        <!-- 左侧栏 -->
        <div class="col-md-12">
          <!-- 地图和热力图放在同一列 -->
          <div class="row">
            <!-- 地图 -->
            <div class="col-md-12">
              <road-disease-map />
            </div>
            <!-- 热力图 -->
            <div class="col-md-12">
              <heat-map />
            </div>
          </div>
        </div>
        <!-- 右侧栏 -->
        <div class="col-md-6 col-md-offset-6">
          <div class="row">
            <!-- 上传文件 -->
            <div class="col-md-12">
              <image-uploader />
            </div>
            <!-- 显示图片 -->
            <div class="col-md-12">
              <image-display />
            </div>
            <!-- 上传经纬度 -->
            <div class="col-md-12 col-md-offset-6">
              <coordinates-form />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ImageUploader from './components/ImageUploader.vue';
import ImageDisplay from './components/ImageDisplay.vue';
import CoordinatesForm from './components/CoordinatesForm.vue';
import HeatMap from './components/HeatMap.vue';
import RoadDiseaseMap from './components/RoadDiseaseMap.vue';

export default {
  components: {
    ImageUploader,
    ImageDisplay,
    CoordinatesForm,
    HeatMap,
    RoadDiseaseMap,
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