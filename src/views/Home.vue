<template>

  <div class="">
    <h1>Seattle Weather</h1>
  


  </div>
  <div>
    <h1>Air Pollution</h1>
    <button v-on:click="getWeatherData">Air Pollution Data</button>

<!-- <div v-for="data in getWeatherData" :key="list.main"> -->
  <!-- <p>{{ airPollutionList }}</p> -->
    <p>{{ airPollutionList }}</p>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      airPollutionList: []
    };
  },
  methods: {
    getWeatherData(){
      fetch('http://api.openweathermap.org/data/2.5/air_pollution?lat=47&lon=-122&appid=edceab3dc505dc66289d3d18b0b1b542')
      .then (response => {
        return response.json()
        })
        .then ((json) => {
          this.airPollutionList = json;
        })
          .catch((err) => alert("ERROR", err));
      }
    }
  }
</script>
