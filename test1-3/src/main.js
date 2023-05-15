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
    console.log('child3 render props: ', props);
    const { container } = props;
    root = createApp(App)
    root.use(router)

    const c = container
        ? container.querySelector("#child3-app")
        : document.getElementById("app")

    root.mount(c)
}

renderWithQiankun({
    mount(props) {
        console.log("child3 mount props", props);
        render(props);
    },
    bootstrap() {
        console.log("child3 bootstrap");
    },
    unmount(props) {
        console.log("child3 unmount");
        root.unmount();
    },
    update(props) {
        console.log("child3 update");
        console.log(props)
    },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render({});
}