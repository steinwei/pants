import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ui/',
  plugins: [vue(), unocss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  server: {
    port: 7999,
  }
})
