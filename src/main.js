import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import {  } from "@fortawesome/free-solid-svg-icons";
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSyncAlt);

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')


// createApp(App).use(router).mount('#app')
// import { faCopyright } from "@fortawesome/free-regular-svg-icons";
// import { faTwitter, faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";

// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"
