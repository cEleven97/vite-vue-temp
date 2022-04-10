import { defineConfig } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Compoents from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  console.log('__dirname: ', 111)
  return {
    resolve: {
      alias: {
        '~': `${path.resolve(__dirname, 'src')}`
      }
    },
    server: {
      host: true,
      open: true
    },
    plugins: [
      Vue({
        reactivityTransform: true
      }),
      AutoImport({
        imports: ['vue', 'vue/macros', '@vueuse/core', 'vue-router'],
        dts: true
      }),
      Compoents({
        dts: true
      })
    ]
  }
})
