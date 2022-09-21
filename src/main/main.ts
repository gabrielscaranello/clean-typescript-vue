import { createApp } from 'vue'
import { setupQuasar } from '@/presentation/utils'
import App from '@/main/App.vue'

const app = createApp(App)

setupQuasar(app)

app.mount('#app')
