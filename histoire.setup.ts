import './src/histoire.css'
import 'primevue/resources/primevue.min.css'
import './src/theme/jjk.scss'

import type { App } from 'vue'

import PrimeVue from 'primevue/config'

export function setupVue3({ app }: { app: App }) {
  app.use(PrimeVue, { ripple: true })
}
