import { createApp } from 'vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Antd from 'ant-design-vue'
import { registerMicroApps, start } from 'qiankun';
// import microApp from '@micro-zoe/micro-app'

import 'ant-design-vue/dist/antd.css'
import './style.css'
import mircApp from './micr-app'
import App from './App.vue'
import Home from './views/home.vue'

const routes = [
    { path: '/', component: Home }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

createApp(App).use(router).use(Antd).mount('#app')



// microApp.start()

registerMicroApps([

    // {
    //     name: 'child2',
    //     entry: import.meta.env.VITE_APP_ENTRY,
    //     // entry: '//localhost:3002/app-child2',
    //     container: '#container',
    //     // activeRule: '/app-child2',
    //     activeRule: '/app-child2',
    // },
    ...mircApp

]);
// 启动 qiankun
start();