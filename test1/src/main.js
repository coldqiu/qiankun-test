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
        entry: '//localhost:3002',
        container: '#container',
        activeRule: '/app-child2',
    },

]);
// 启动 qiankun
start();