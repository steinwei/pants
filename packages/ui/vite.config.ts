import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from '@unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetMini from '@unocss/preset-mini'

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: path.resolve(__dirname, './public'),
    plugins: [vue(), unocss({
      presets: [
        presetUno(),
        presetMini(),
      ],
    })],
    build: {
        outDir: 'lib',
        lib: {
            formats: ['es','cjs'],
            fileName: format => `[name].${format}.js`,
            name: 'pants',
            entry: path.resolve(__dirname, 'src/index.ts'),
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
