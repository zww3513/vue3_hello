<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h2 class="my-title">vue3学习记录</h2>
      </el-header>
      <el-container>
        <el-aside width="600px" height="100%">
          <el-scrollbar>
            <el-menu :default-active="activeIndex" :router="true">
              <el-sub-menu index="/">
                <template #title>
                  <el-icon>
                    <Location />
                  </el-icon>
                  <span>父子组件通信</span>
                </template>
                <el-menu-item index="/">[主页]</el-menu-item>
                <el-menu-item index="/props">[props]</el-menu-item>
                <el-menu-item index="/custom-event">[自定义事件]</el-menu-item>
                <el-menu-item index="/about">[mitt]</el-menu-item>
                <el-menu-item index="/about">[v-model]</el-menu-item>
                <el-menu-item index="/about">[$attr]</el-menu-item>
                <el-menu-item index="/about">[provide、inject]</el-menu-item>
                <el-menu-item index="/about">[pinia]</el-menu-item>
                <el-menu-item index="/about">[slat插槽]</el-menu-item>
              </el-sub-menu>
            </el-menu>
          </el-scrollbar></el-aside>
        <el-main>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'


const activeIndex = ref("/")
</script>
<style scoped>
.my-title {
  text-align: center;
}
</style>