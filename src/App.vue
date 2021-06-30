<template>
  <header class="header" role="img">
      <img class="logo" src="./assets/seattle_weather_logo.png" alt="Seattle Weather Logo in white color">
  </header>
<nav id="nav">
  <div >
    <router-link class="routerLink" to="/">Home</router-link>
    <router-link class="routerLink" to="/climatefacts">Climate Facts</router-link>
    <router-link class="routerLink" to="/airquality">Air Quality</router-link>
    <router-link class="routerLink" to="/contactus">Contact Us</router-link>
    <!-- <router-link to="/faq">Faq</router-link> -->
  </div>
</nav>
  <router-view/>

  <footer class="footer">
      <p><img class="footer-logo" src="./assets/seattle_weather_logo.png" alt="Seattle Weather Logo in white color"></p>

      <p>Seattle Weather ipsum inci tet aut que volupti beruptiberro to ex
      esseque<br> invenienihil imaximu scideru ptistiusam consequunt</p>

      <router-link class="routerLink" to="/">Home</router-link> |
      <router-link class="routerLink" to="/climatefacts">Climate Facts</router-link> |
      <router-link class="routerLink" to="/airquality">Air Quality</router-link> |
      <router-link class="routerLink" to="/contactus">Contact Us</router-link>
      <p>©  2021 Seattle Weather, LLC &nbsp;|&nbsp; Seattle, WA</p>
  </footer>
</template>

<style lang="scss">
body {
  margin: 0;
  box-sizing: border-box;
  text-align: left;
}

h1 {
  font-weight: lighter;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

.routerLink{
     text-decoration: none;
 }

 .main {
   margin: 0 10%;
 }

#nav {
  padding: .75rem;
  text-align: center;
  font-weight: lighter;
  background-color: #212121;
  font-size: .9rem;

  a {
    font-weight: lighter;
    color: #fff;
    padding: .75rem;

    &.router-link-exact-active {
      color: #fff;
      font-weight: lighter;
      background-color: #1E90FF;
      padding: .75rem;
    }
  }
}
// background-image: linear-gradient(to right, #f9d423 0%, #ff4e50 100%);
// 45deg, rgba(0, 0, 0, .1), rgba(255, 141, 0, .5
// background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
.header {
   background-image: linear-gradient(-45deg, rgba(0, 0, 0, .1), rgba(68, 68, 68, .5)), url("./assets/cloud_bkg.jpg");
   text-align: center;
   filter: contrast(1.2);
   // img {
   //   margin-left: auto;
   //   margin-right: auto;
   // }
 }

.logo {
  margin: 3rem auto;
  filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.2));
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
