<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h2 class="my-title">vue3学习记录</h2>
      </el-header>
      <el-container>
        <el-aside width="300px" height="100%">
          <el-scrollbar>
            <el-menu :default-active="activeIndex" :router="true">
              <el-sub-menu index="/">
                <template #title>
                  <el-icon>
                    <message />
                  </el-icon>父子组件通信
                </template>
                <el-menu-item index="/about">v-model</el-menu-item>
                <el-menu-item index="/">主页</el-menu-item>
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
const activeIndex = ref("/")
</script>
<style scoped>
.my-title {
  text-align: center;
}
</style>