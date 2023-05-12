import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import { registerMicroApps, start } from 'qiankun';
// import microApp from '@micro-zoe/micro-app'

import 'ant-design-vue/dist/antd.css'
import './style.css'
import App from './App.vue'
createApp(App).use(Antd).mount('#app')



// microApp.start()

registerMicroApps([
    // {
    //     name: 'child1',
    //     entry: '//localhost:3001',
    //     container: '#container',
    //     activeRule: '/app-child1',
    // },
    {
        name: 'child2',
        entry: import.meta.env.VITE_APP_ENTRY,
        // entry: '//localhost:3002/app-child1',
        container: '#container',
        // activeRule: '/app-child1',
        activeRule: '/app-child1',
    },

]);
// 启动 qiankun
start();