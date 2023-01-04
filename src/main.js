import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import axios from 'axios'
import nav_bar from './components/nav_bar.vue'
import router from './router/router.config.js'
import tailwind from './assets/CSS/tailwind.css?tailwind.css'


const app = createApp(App)
const pinia = createPinia()


app.config.globalProperties.$axios = axios

app.component('navbar', nav_bar)

app.use(tailwind)
app.use(pinia)
app.use(router)
app.mount('#app')
