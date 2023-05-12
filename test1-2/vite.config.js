import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun/es/index'
// https://vitejs.dev/config/

const useDevMode = true

export default defineConfig({
  plugins: [vue(),
  qiankun('child2', {
    useDevMode // 为true时 不开启热更新
  })
  ],
  server: {
    port: 3002,
    cors: true
  }
})
