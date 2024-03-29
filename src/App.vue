<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h2 class="my-title">vue3学习记录</h2>
      </el-header>
      <el-container>
        <el-aside width="600px" height="100%">
          <el-scrollbar>
            <el-menu :router="true">
              <el-sub-menu index="/props">
                <template #title>
                  <el-icon>
                    <Location />
                  </el-icon>
                  <span>组件通信</span>
                </template>
                <el-menu-item index="/props">[props]</el-menu-item>
                <el-menu-item index="/custom-event">[自定义事件]</el-menu-item>
                <el-menu-item index="/mitt">[mitt]</el-menu-item>
                <el-menu-item index="/v-model">[v-model]</el-menu-item>
                <el-menu-item index="/$attrs">[$attr]</el-menu-item>
                <el-menu-item index="/$refs-$parent">[$refs、$parent]</el-menu-item>
                <el-menu-item index="/provide-inject">[provide、inject]</el-menu-item>
                <el-menu-item index="/pinia">[pinia]</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="/hooks">
                <template #title>
                  <el-icon>
                    <Document />
                  </el-icon>
                  <span>hooks</span>
                </template>
                <el-menu-item index="/hooks">[hooks]</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="/pinia">
                <template #title>
                  <el-icon>
                    <Clock />
                  </el-icon>
                  <span>pinia</span>
                </template>
                <el-menu-item index="/pinia">[pinia]</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="/watch">
                <template #title>
                  <el-icon>
                    <Setting />
                  </el-icon>
                  <span>watch监视</span>
                </template>
                <el-menu-item index="/watch1">[watch监视-情况1]</el-menu-item>
                <el-menu-item index="/watch2">[watch监视-情况2]</el-menu-item>
                <el-menu-item index="/watch3">[watch监视-情况3]</el-menu-item>
                <el-menu-item index="/watch4">[watch监视-情况4]</el-menu-item>
                <el-menu-item index="/watch5">[watch监视-情况5]</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="/xterm">
                <template #title>
                  <el-icon>
                    <Clock />
                  </el-icon>
                  <span>xterm</span>
                </template>
                <el-menu-item index="/xterm">[xterm]</el-menu-item>
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
  Clock,
} from '@element-plus/icons-vue'


const activeIndex = ref("/props")
</script>
<style scoped>
.my-title {
  text-align: center;
}
</style>