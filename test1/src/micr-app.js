export default [
    {
        name: 'child2',
        index: 0,
        entry: import.meta.env.VITE_APP_CHILD2_ENTRY,
        container: '#container',
        activeRule: '/app-child2',
        homeLink: '/app-child2/'
    },
    {
        name: 'child3',
        index: 0,
        entry: import.meta.env.VITE_APP_CHILD3_ENTRY,
        container: '#container',
        activeRule: '/app-child3',
        homeLink: '/app-child3/'
    }
]

// 参考 中台 的实现
// 已经有了环境变量了啊