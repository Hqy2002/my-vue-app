<template>
    <div class="map-container">
      <div ref="mapContainer" class="map"></div>
      <div class="info-window" v-show="infoWindowVisible">
        <div class="info-window-content">
          <div class="info-window-header">
            <h3>{{ selectedMarkerData.type }}</h3>
            <button @click="closeInfoWindow()">&times;</button>
          </div>
          <div class="info-window-body">
            <img :src="selectedMarkerData.image" alt="病害图片">
            <p>经度：{{ selectedMarkerData.longitude }}</p>
            <p>纬度：{{ selectedMarkerData.latitude }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        map: null,
        markers: [],
        roadDiseaseData: [],
        selectedMarker: null,
        selectedMarkerData: {},
        infoWindowVisible: false,
      };
    },
    mounted() {
      const script = document.createElement('script');
      script.src = 'https://webapi.amap.com/maps?v=1.4.15&key=YOUR_API_KEY';/*这里暂时写的高德地图api*/
      script.onload = () => {
        this.initMap();
      };
      document.head.appendChild(script);
    },
    async created() {
      const response = await axios.get('your-api-url-here/road-disease-data');
      this.roadDiseaseData = response.data;
    },
    methods: {
      initMap() {
        this.map = new AMap.Map(this.$refs.mapContainer, {
          zoom: 10,
          center: [116.397428, 39.90923],
        });
        this.createMarkers();
      },
      createMarkers() {
        const markers = this.roadDiseaseData.map(data => {
          const marker = new AMap.Marker({
            position: [data.lng, data.lat],
            icon: new AMap.Icon({
              size: new AMap.Size(32, 32),
              image: data.image,
            }),
            extData: data,
          });
          marker.on('mouseover', () => {
            this.focusMarker(marker);
          });
          this.map.add(marker);
          return marker;
        });
        this.markers = markers;
      },
      focusMarker(marker) {
        this.selectedMarker = marker;
        this.selectedMarkerData = marker.getExtData();
        this.showInfoWindow();
        this.map.setZoomAndCenter(18, marker.getPosition());
      },
      showInfoWindow() {
        this.infoWindowVisible = true;
      },
      closeInfoWindow() {
        this.infoWindowVisible = false;
        this.selectedMarker = null;
        this.selectedMarkerData = {};
      },
    },
  };
  </script>
  
  <style scoped>
  .map-container {
    position: relative;
    height: 400px;
  }
  
  .map {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  .info-window {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  .info-window-content {
    max-width: 500px;
    max-height: 90%;
    overflow: auto;
    padding: 10px;
  }
  
  .info-window-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .info-window-header h3 {
    margin: 0;
  }
  
  .info-window-header button {
    border: none;
    background-color: transparent;
    color: gray;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .info-window-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
  
  .info-window-body img {
    max-width: 100%;
    max-height: 200px;
    margin-bottom: 10px;
  }
  
  .info-window.visible {
    opacity: 1;
  }
  </style>