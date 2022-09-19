import App from './App.vue'
import { createApp } from 'vue'
import { setupQuasar } from './utils/quasar'

const app = createApp(App)

setupQuasar(app)

app.mount('#app')
