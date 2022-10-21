import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from '@unocss/vite'
import presetAttributify from '@unocss/preset-attributify'
import presetUno from '@unocss/preset-uno'

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: path.resolve(__dirname, './public')
    plugins: [vue(), unocss({
      presets: [
        presetUno(),
        presetAttributify(),
      ],
    })],
    build: {
        entry: path.resolve(__dirname, './src/main.ts'),
        output: {
            outDir: 'lib',
            formats: ['es','cjs'],
            filename: format => `[name].${format}.js`,
            name: 'pants',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
