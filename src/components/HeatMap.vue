<template>
    <div ref="mapContainer" style="height: 400px;"></div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    mounted() {
      const script = document.createElement('script');
      script.src = 'https://api.map.baidu.com/api?v=3.0&ak=YOUR_API_KEY';
      script.onload = () => {
        const map = new BMap.Map(this.$refs.mapContainer);
        const heatmap = new BMapLib.Heatmap(map, {
          radius: 20,
          opacity: 0.8,
          gradient: { 0.4: 'blue', 0.6: 'cyan', 0.7: 'lime', 0.8: 'yellow', 1.0: 'red' },
        });
        this.fetchHeatmapData().then(points => {
          heatmap.setDataSet({ data: points, max: 100 });
          heatmap.show();
        });
      };
      document.head.appendChild(script);
    },
    methods: {
      async fetchHeatmapData() {
        const response = await axios.get('your-api-url-here/heatmap-data');
        const heatmapData = response.data;
        const points = heatmapData.map(data => {
          const point = new BMap.Point(data.lng, data.lat);
          // ...
          return point;
        });
        return points;
      },
    },
  };
  </script>