<template>
  <div>
    <h3>监视ref定义的基本类型数据</h3>
    <h3>打开控制台查看效果</h3>
    <h3>sum={{ sum }}</h3>
    <button @click="add">点击+1</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const sum = ref(0)
const add = () => {
  sum.value += 1
}

// 监视，情况一：监视【ref】定义的【基本类型】数据
const stopWatch = watch(sum, (newValue, oldValue) => {
  console.log('sum变化了', newValue, '<-',oldValue)
  if (newValue >= 10) {
    stopWatch()
  }
})
</script>