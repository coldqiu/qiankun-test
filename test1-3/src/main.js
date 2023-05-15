import { createApp } from 'vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import { renderWithQiankun, qiankunWindow } from "vite-plugin-qiankun/es/helper";

// import './style.css'
import App from './App.vue'
import Home from './views/home.vue'
import About from './views/about.vue'

// createApp(App).mount('#app')
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHistory('/app-child3'),
    routes,
})

let root = undefined

function render(props) {
    console.log('render props: ', props);
    const { container } = props;
    root = createApp(App)
    root.use(router)
    console.log('router: ', router);

    const c = container
        ? container.querySelector("#child3-app")
        : document.getElementById("app")

    console.log("c", c)
    root.mount(c)
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