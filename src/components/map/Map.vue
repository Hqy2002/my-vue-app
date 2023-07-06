<template>
  <div class="map-container" ref="mapContainer"></div>
</template>

<script>
export default {
  mounted() {
    // 初始化地图
    const map = new AMap.Map(this.$refs.mapContainer, {
      zoom: 10,
      center: [116.397428, 39.90923],
    });
    // 在地图上添加标记
    const marker = new AMap.Marker({
      position: [116.397428, 39.90923],
      map: map,
    });
  },
};
</script>

<style>
.map-container {
  width: 100%;
 = height: 400px;
}
</style>