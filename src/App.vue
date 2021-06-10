<template>
  <header class="header">
      <img class="logo" src="./assets/seattle_weather_logo.png" alt="Seattle Weather Logo in white color">
  </header>

  <div id="nav">
    <router-link class="routerLink" to="/">Home</router-link> |
    <router-link class="routerLink" to="/climatefacts">Climate Facts</router-link> |
    <router-link class="routerLink" to="/weatherjokes">Weather Jokes</router-link> |
    <router-link class="routerLink" to="/contactus">Contact Us</router-link>
    <!-- <router-link to="/faq">Faq</router-link> -->
  </div>
  <router-view/>

  <div class="">
    <div id="app">
      <Home />
    </div>
  </div>


  <footer class="footer">
      <p><img class="footer-logo" src="./assets/seattle_weather_logo.png" alt="Seattle Weather Logo in white color"></p>

      <p>Aborpos nisto inci tet aut que volupti beruptiberro to ex
      esseque<br> invenienihil imaximu scideru ptistiusam consequunt</p>

      <router-link class="routerLink" to="/">Home</router-link> |
      <router-link class="routerLink" to="/climatefacts">Climate Facts</router-link> |
      <router-link class="routerLink" to="/weatherjokes">Weather Jokes</router-link> |
      <router-link class="routerLink" to="/contactus">Contact Us</router-link>
      <p>©  2021 Seattle Weather, LLC &nbsp;|&nbsp; Seattle, WA</p>
  </footer>
</template>

<script>
  import Home from './views/Home.vue'
  export default {

  }

</script>

<style lang="scss">
body {
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.routerLink{
     text-decoration: none;
 }

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #666666;

    &.router-link-exact-active {
      color: #1E90FF;
    }
  }
}

.header {
   background-image: url("./assets/cloud_bkg.jpg");
 }

.logo {
  margin: 1rem auto;
}

.footer {
  width: 100%;
  color: #fff;
  text-decoration: none;
  height: auto;
  background-color: #454545;
  margin-top: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  font-size: .8rem;
  a {
    color: #fff;
  }
}
.footer-logo {
  width: 7rem;
}

.copyright {
  color: #FFF;
  font-size: .7rem;
}
</style>
