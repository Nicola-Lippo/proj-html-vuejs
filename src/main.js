import { createApp } from 'vue'
import '/src/assets/scss/main.scss'

import App from './App.vue'
// Import our custom CSS
import './assets/scss/main.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//importo il file router
import { router } from './router'
//diciamo al file .app di usare il ffile router
createApp(App).use(router).mount('#app')
