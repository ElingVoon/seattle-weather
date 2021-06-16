<template>
  <div class="">
    <h1>Current Weather</h1>
    <p>Temperature: {{ temp + '°F' }}  </p>
    <p>Feels like: {{ feels_like + '°F'}}</p>
    <p>Humidity: {{ humidity + '%' }}</p>
    <p>id: {{ id }}</p>
    <p>Weather: {{ weather }}</p>
    <p>Clouds: {{ clouds }}</p>
    <p><img v-bind:src="icon" alt="Icon depicting current weather"></p>
    <p>Description: {{ description }}</p>
    <p>Rain: {{ rain }}</p>
    <p>Pressure: {{ pressure + 'mb' }}</p>
    <p>Wind: {{ wind + 'mph' }}</p>
    <!-- <p>Visibility: {{ visibility }}</p> -->

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
        wind:"",
        // visibility:""
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
            // this.wind2 = json.wind.direction.name
            // this.visibility = json.visibility.value
            // this.precipitation = json.precipitation
        })
    }
  }
</script>
