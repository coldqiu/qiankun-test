import { createApp } from 'vue'
import { createRouter, createWebHistory,createWebHashHistory  } from 'vue-router'
import { renderWithQiankun, qiankunWindow } from "vite-plugin-qiankun/es/helper";

// import './style.css'
import App from './App.vue'
import Home from './views/index.vue'
import About from './views/about.vue'
// 1. 定义路由组件.
// 也可以从其他文件导入
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // history: createWebHistory('/'),
    history: createWebHistory('/app-child1'),
    // history: createWebHashHistory ('/#app-child1'),

    routes, // `routes: routes` 的缩写

})

// createApp(App).use(router).mount('#app')

function render(props) {
    console.log('render props: ', props);
    const { container } = props;
    const app = createApp(App)
    app.use(router)
    console.log('router: ', router);

    const c = container
        ? container.querySelector("#child2-app")
        : document.getElementById("app")

    console.log("c", c)
    app.mount(c)
}

renderWithQiankun({
    mount(props) {
        console.log("vue3sub mount props", props);
        render(props);
    },
    bootstrap() {
        console.log("bootstrap");
    },
    unmount(props) {
        console.log("vue3sub unmount");
        root.unmount();
    },
    update(props) {
        console.log("vue3sub update");
        console.log(props)
    },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render({});
}