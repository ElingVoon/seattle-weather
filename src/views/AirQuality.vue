<template>
  <main>
  <div class="main">
    <h1>Air Quality</h1>
    <!-- <button v-on:click="getWeatherData">Air Pollution Data</button>
    <p>Air quality Index: {{ aqi }}</p>
    <p>PM2.5 (Fine particles matter): {{ pm2_5 }}</p>
    <p>PM10 (Coarse particulate matter): {{ pm10 }}</p> -->

    <div class="container">
      <div class="item label">Air quality Index
        <div class="itemtext">
          {{ aqi }}
        </div>
      </div>
      <div class="item label">PM2.5 (Fine particles matter)
        <div class="itemtext">
          {{ pm2_5 }}
        </div>
      </div>
      <div class="item label">PM10 (Coarse particles matter)
        <div class="itemtext">
          {{ pm10 }}
        </div>
      </div>
      <div class="item label">Ozone
        <div class="itemtext">
          {{ o3 }}
        </div>
      </div>
      <div class="item label">CO (Carbon monoxide)
        <div class="itemtext">
          {{ co + 'μg/m3'}}
        </div>
      </div>
    </div>
</div>
</main>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        aqi: "" ,
        pm2_5: "" ,
        pm10: "",
        o3: "",
        co: ""
      }
    },
      mounted() {
        fetch('http://api.openweathermap.org/data/2.5/air_pollution?lat=47.60&lon=-122.33&appid=edceab3dc505dc66289d3d18b0b1b542')
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
            this.o3 = json.list[0].components.o3
            this.co = json.list[0].components.co
        })
    }
  }
</script>

<style lang="scss">
img {
  vertical-align: middle;
}
.container {
  // border: 1px solid red;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.item {
  // border: 1px dashed blue;
  height: 50px;
  box-sizing: border-box;
  max-width: 50%;
}
.label {
  color: #999;
  font-size: .7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
.itemtext {
  font-size: 1.5rem;
  color: #444;
  font-weight: lighter;
  border-bottom: 1px solid #ccc;
  margin-bottom: .2rem;
  padding-top: .2rem;
}
.main {
  margin: 0 10%;
}
.temp {
  font-size: 4rem;
  color: #e96e50;
  align: top;
}
</style>
