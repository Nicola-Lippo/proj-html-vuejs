import { createApp } from 'vue'
import '/src/assets/scss/main.scss'

import App from './App.vue'
// Import our custom CSS
import './assets/scss/main.scss'
// import font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass as searchicon } from '@fortawesome/free-solid-svg-icons';
import { faBars as homburger } from '@fortawesome/free-solid-svg-icons/faBars';
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';
import { faGlasses } from '@fortawesome/free-solid-svg-icons';
import { faMask } from '@fortawesome/free-solid-svg-icons';
import { faChair } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
library.add(searchicon, homburger, faVideo, faGlasses, faMask, faChair, faFilm, faTicket);
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//importo il file router
import { router } from './router'
//diciamo al file .app di usare il ffile router
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
