<template class="count">
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>


<script setup lang="ts" name="Count">
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia';
import { useCountStore } from '@/stores/count.js'
const countStore = useCountStore()
const { sum } = storeToRefs(countStore)
let n = ref(1)

//方法
function add() {
  // 第一种修改方式
  // countStore.sum+=n.value
  // 第二种修改方式
  // countStore.$patch({
  //     sum:888
  // })
  // 第三种修改方式 借助action
  countStore.increment(n.value)

}
function minus() {
  sum.value-=n.value
}

</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
}
</style>