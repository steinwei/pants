import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from '@unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetMini, { colors } from '@unocss/preset-mini'

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: path.resolve(__dirname, './public')
    plugins: [vue(), unocss({
      presets: [
        presetUno(),
        presetMini({
            theme: {
                colors: {
                    primary: colors.emerald,
                }
            }
        }),
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
