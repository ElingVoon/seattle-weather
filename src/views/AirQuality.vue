<template>
  <div>
    <h1>Air Quality</h1>
    <button v-on:click="getWeatherData">Air Pollution Data</button>
    <p>Air quality Index: {{ aqi }}</p>
    <p>PM2.5 (Fine particles matter): {{ pm2_5 }}</p>
    <p>PM10 (Coarse particulate matter): {{ pm10 }}</p>
</div>
</template>



<script>
  export default {
    name: 'Home',
    data() {
      return {
        aqi: "" ,
        pm2_5: "" ,
        pm10: ""
      }
    },
      mounted() {
        fetch('http://api.openweathermap.org/data/2.5/air_pollution?lat=47&lon=-122&appid=edceab3dc505dc66289d3d18b0b1b542')
        .then (response => {
          return response.json()
          })
          .then ((json) => {
            if (json.list.length < 1) {
              //TODO: show error or populate with dummy data - API retruned no data
            }
            this.aqi = json.list[0].main.aqi
            this.pm2_5 = json.list[0].components.pm2_5
            this.pm10 = json.list[0].components.pm10
        })
    }
  }
</script>
