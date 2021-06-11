<template>
  <div>
    <h1>Air Pollution</h1>
    <!-- <img @click="getData" alt="Vue logo" src="../assets/logo.png"> -->
  </div>
    <div>
      <ul>
        <li v-for="list in airPollutionList">
        {{ list.aqi }}
      </li>
      </ui>
    </div>


</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      airPollutionList: []
      aqi: "" ,
      pm2_5:"" ,
      pm10:""
    }
  },
  mounted() {
      fetch('http://api.openweathermap.org/data/2.5/air_pollution?lat=47&lon=-122&appid=edceab3dc505dc66289d3d18b0b1b542')
      .then (response => {
        return response.json()
        })
        .then ((json) => {
          this.airPollutionList = json;
        })
    }
  }
</script>
