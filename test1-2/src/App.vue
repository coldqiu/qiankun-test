<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <h1>child2</h1>
    <h2>router:</h2>
    <!-- <router-link to="./">Go to Home</router-link>
    <router-link to="./about">Go to About</router-link> -->
    <!-- 在 createHistory('/')时 上面的配置 无法正常跳转 child2 / 和 /about 页 -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
