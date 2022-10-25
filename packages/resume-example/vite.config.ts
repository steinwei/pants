import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCss from '@unocss/vite'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetUnocss from '@unocss/preset-uno'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCss({
        presets: [
            presetRemToPx(),
            presetUnocss(),
        ]
    }),
  ]
})
