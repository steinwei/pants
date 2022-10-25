import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import UI from '@pants/ui'
import theme from './theme'

const app = createApp(App)

app.use(UI, {
    prefix: 'P',
    theme,
})

app.mount('#app')
