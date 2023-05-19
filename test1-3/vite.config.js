import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun/es/index'

// https://vitejs.dev/config/

const useDevMode = true

export default defineConfig({
  base: '/child3/',
  plugins: [vue(),
  qiankun('child3',
    {
      useDevMode // 为true时 不开启热更新 // 这个配置是必须的！？ 注释这个配置，或者配置为 false, 程序都报错
    }
  )
  ],
  server: {
    port: 3003,
    cors: true
  }
})
