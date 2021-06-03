import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ClimateFacts from '../views/ClimateFacts.vue'
import WeatherJokes from '../views/WeatherJokes.vue'
import ContactUs from '../views/ContactUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/climatefacts',
    name: 'ClimateFacts',
    component: ClimateFacts
  },
  {
    path: '/weatherjokes',
    name: 'WeatherJokes',
    component: WeatherJokes
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    component: ContactUs
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
