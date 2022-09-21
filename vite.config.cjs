import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: resolve(__dirname, 'src/application'),
  build: {
    outDir: resolve(__dirname, 'dist')
  },
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar({
      autoImportComponentCase: 'pascal',
      sassVariables: 'src/sass/variables.sass'
    })
  ],
  resolve: {
    alias: {
      '@/vue': fileURLToPath(new URL('./src/application', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
