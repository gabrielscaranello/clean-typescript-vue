import { App } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/pt-BR'
import quasarIconSet from 'quasar/icon-set/line-awesome'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/line-awesome/line-awesome.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

export const setupQuasar = (app: App): void => {
  app.use(Quasar, {
    plugins: {},
    lang: quasarLang,
    iconSet: quasarIconSet
  })
}
