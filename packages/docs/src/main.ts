import { createApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@pants/ui/style'

import UI from '@pants/ui'
import theme from './theme'
import router from './router'

const app = createApp(App)

app.use(router)

app.use(UI, {
    prefix: 'P',
    theme,
})

app.mount('#app')
