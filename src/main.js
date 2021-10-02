// Vue Imports
import { createApp } from 'vue'
import App from './App.vue'

// CSS Imports
import './assets/styles/index.css'

// FontAwesome Imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import router from './router'

// Global components
const FAStyles = [fab, fas]
FAStyles.forEach((style) => library.add(style))

const app = createApp(App)
app.use(router).component('FontAwesomeIcon', FontAwesomeIcon).mount('#app')
