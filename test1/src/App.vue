<script setup>
import { ref } from 'vue'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined
} from '@ant-design/icons-vue';
import micrApps from './micr-app'

// selectedKeys: ref<string[]>(['1']),
//       collapsed: ref<boolean>(false),
const selectedKeys = ref([])
const collapsed = ref(false)
</script>

<template>
  <a-layout>
    <!-- <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined class="iconfont" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined class="iconfont" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined class="iconfont" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider> -->
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">

        <a-row>
          <a-col :span="12"> <menu-unfold-outlined v-if="collapsed" class="trigger iconfont"
              @click="() => (collapsed = !collapsed)" />
            <menu-fold-outlined v-else class="trigger iconfont" @click="() => (collapsed = !collapsed)" /></a-col>
          <a-col :span="12">
            <a-row justify="end">
              <a-dropdown>
                <a class="ant-dropdown-link" @click.prevent>
                  <DownOutlined />
                  change current app
                </a>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      <!-- <a href="javascript:;">Home</a> -->
                      <router-link to="/">Home</router-link>
                    </a-menu-item>
                    <a-menu-item v-for="item in micrApps" :key="item.index">
                      <router-link :to="item.homeLink">{{ item.name }}</router-link>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </a-row>
          </a-col>
        </a-row>

      </a-layout-header>
      <a-layout-content class="mContent">
        <div id="container"></div>
        <!-- <micro-app name='child1' url='http://localhost:3001/' baseroute='/child1' inline disableSandbox></micro-app>
        <micro-app name='child2' url='http://localhost:3002/' baseroute='/child2' inline disableSandbox></micro-app> -->
        <router-view></router-view>
      </a-layout-content>
      <!-- <a-layout-footer class="mFooter">Footer</a-layout-footer> -->
    </a-layout>
  </a-layout>

  <!-- <HelloWorld msg="Vite + Vue" /> -->
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
