import { createApp } from 'vue'
import '/src/assets/scss/main.scss'
import App from './App.vue'

//importo il file router
import { router } from './router'
//diciamo al file .app di usare il ffile router
createApp(App).use(router).mount('#app')
