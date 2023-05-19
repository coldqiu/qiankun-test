import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(
    // {
    //   template: {
    //     compilerOptions: {
    //       // 注册自定义组件micro-app 防止控制台警告
    //       isCustomElement: tag => /^micro-app/.test(tag)
    //     }
    //   }
    // }
  ),
  Components({
    resolvers: [AntDesignVueResolver()],
  }),
  // qiankun('child2'),
  // qiankun('child3')
  ],
  server: {
    port: 3000
  }
})
