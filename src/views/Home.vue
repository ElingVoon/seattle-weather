<template>
  <div class="main">
    <div class="temp">
      <img v-bind:src="icon" alt="Icon depicting current weather">{{ temp + '°F' }}
    </div>
      <div class="container">
        <div class="item label">Feels like
          <div class="itemtext">
            {{ feels_like + '°F'}}
          </div>
        </div>
        <div class="item label">Humidity
          <div class="itemtext">
            {{ humidity + '%' }}
          </div>
        </div>
        <div class="item label">id
          <div class="itemtext">
            {{ id }}
          </div>
        </div>
        <div class="item label">Weather
          <div class="itemtext">
           {{ weather }}
          </div>
        </div>
        <div class="item label">Clouds
          <div class="itemtext">
            {{ clouds + '%'}}
          </div>
        </div>
        <div class="item label">Description
          <div class="itemtext">
            {{ description }}
          </div>
        </div>
        <div class="item label">Rain
          <div class="itemtext">
            {{ rain }}
          </div>
        </div>
        <div class="item label">Pressure
          <div class="itemtext">
            {{ pressure + 'mb' }}
          </div>
        </div>
        <div class="item label">Wind
          <div class="itemtext">
            {{ wind + 'mph' }}
          </div>
        </div>
      </div>
  </div>
</template>

<script>
            // const removedDecimal = Math.round(decimal);
  export default {
    name: 'currentWeather',
    data() {
      return {
        temp: "" ,
        feels_like: "" ,
        humidity: "",
        id:"",
        weather:"",
        clouds:"",
        icon:"",
        description:"",
        rain:"",
        pressure:"",
        wind:""
      }
    },
    method: {
      removedDecimal() {
      $.round = Math.round();
      }
    },

      mounted() {
        fetch('http://api.openweathermap.org/data/2.5/weather?lat=47&lon=122&mode=json&units=imperial&appid=edceab3dc505dc66289d3d18b0b1b542')
        .then (response => {
          return response.json()
          })
          .then ((json) => {
            if (json.weather.length < 1) {
              //TODO: show error or populate with dummy data - API retruned no data
            }

            this.temp = json.main.temp
            this.feels_like = json.main.feels_like
            this.humidity = json.main.humidity
            //weather.id - weather condition id
            this.id = json.weather[0].id
            this.weather = json.weather[0].main
            this.clouds = json.clouds.all
            //weather.icon - weather icon id, http://openweathermap.org/img/wn/10d@2x.png
            this.icon = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
            this.description = json.weather[0].description
            this.rain = json.rain
            this.pressure = json.main.pressure
            this.wind = json.wind.speed
            this.dt = json.dt
            // this.wind2 = json.wind.direction.name

            // this.precipitation = json.precipitation
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
  height: 250px;
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
