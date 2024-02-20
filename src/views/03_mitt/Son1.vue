<template>
  <div class="Son1">
    <h3>子组件1</h3>
    <h4>玩具：{{ toy }}</h4>
  </div>
</template>


<script setup>
import emitter from "@/utils/emitter";
import { onUnmounted, ref } from "vue";
defineOptions({
  name: 'Son1'
})

let toy = ref('')

// 绑定事件
emitter.on('send-toy', (value) => {
  console.log('send-toy事件被触发', value)
  toy.value = value
})

onUnmounted(() => {
  // 解绑事件
  console.log('解绑send-toy事件')
  emitter.off('send-toy')
})
</script>


<style scoped>
.Son1 {
  margin: 10px;
  background-color: rgb(59, 161, 64);
  padding: 10px;
  border-radius: 10px;
}
</style>