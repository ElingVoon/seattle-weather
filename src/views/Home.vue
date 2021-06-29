<template>
  <main>
  <div class="main">

      <div class="item label" v-show="date">{{ date }} | {{ time }}</div>
      
    <div class="temp">
      <img v-bind:src="icon" alt="Icon depicting current weather">{{ temp + '°F' }}
    </div>
      <div class="container">
        <div class="item label">Feels like
          <div class="itemtext">
            {{ feels_like + '°F'}}
          </div>
        </div>
        <div class="item label">Low - High
          <div class="itemtext">
            {{ temp_min + '°F' + ' - '}}{{ temp_max + '°F' }}
          </div>
        </div>
        <div class="item label">Humidity
          <div class="itemtext">
            {{ humidity + '%' }}
          </div>
        </div>

        <div class="item label">Weather
          <div class="itemtext">
           {{ weather }}
          </div>
        </div>

        <div class="item label">Description
          <div class="itemtext">
            {{ description }}
          </div>
        </div>

        <div class="item label">Pressure
          <div class="itemtext">
            {{ pressure + ' mb' }}
          </div>
        </div>
        <div class="item label">Wind
          <div class="itemtext">
            {{ wind + ' mph' }}
          </div>
        </div>
        <div class="item label">Clouds
          <div class="itemtext">
            {{ clouds + '%'}}
          </div>
        </div>
        <div class="item label">Rain
          <div class="itemtext">
            {{ rain }}
          </div>
        </div>
      </div>
  </div>
</main>
</template>

<script>
            // const removedDecimal = Math.round(decimal);
  export default {
    name: 'currentWeather',
    data() {
      return {
        date: "",
        time: "",
        temp: "" ,
        feels_like: "" ,
        temp_min: "",
        temp_max: "",
        humidity: "",
        weather:"",
        clouds:"",
        icon:"",
        description:"",
        rain:"",
        pressure:"",
        wind:""
      }
    },
//
    methods:{
      getDate: function () {
      return new Date().toLocaleDateString('default', { day: 'numeric', weekday: 'long', month:'long' });
      },
      getTime: function () {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' });
      },
    },

      mounted() {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=47.60&lon=-122.33&mode=json&units=imperial&appid=edceab3dc505dc66289d3d18b0b1b542')
        .then (response => {
          return response.json()
          })
          .then ((json) => {
            if (json.weather.length < 0) {
              //TODO: show error or populate with dummy data - API retruned no data
            }

            this.temp = Math.round(json.main.temp)
            this.feels_like = Math.round(json.main.feels_like)
            this.temp_min = Math.round(json.main.temp_min)
            this.temp_max = Math.round(json.main.temp_max)
            this.humidity = json.main.humidity
            this.weather = json.weather[0].main
            this.clouds = json.clouds.all
            //weather.icon - weather icon id, http://openweathermap.org/img/wn/10d@2x.png
            this.icon = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
            this.description = json.weather[0].description
            this.rain = json.rain
            this.pressure = json.main.pressure
            this.wind = json.wind.speed
            // this.dt = json.dt
            this.date = this.getDate();
            this.time = this.getTime();
            this.timestamp = this.getTimestamp();
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
