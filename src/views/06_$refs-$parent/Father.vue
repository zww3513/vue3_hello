<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>房产={{ house }}</h4>
    <Son ref="son" />
    <Son2 ref="son2" />

    <button @click="addSonBook">儿子书籍+1</button>
    <button @click="addSon2Book">儿子2书籍+1</button>
    <button @click="addAllBook($refs)">所有儿子书籍+1</button>

  </div>
</template>


<script setup>
import { ref } from 'vue'
import Son from './Son.vue'
import Son2 from './Son2.vue'


const son = ref()
const son2 = ref()

const house = ref(4)

const addSonBook = () => {
  son.value.book += 1
}
const addSon2Book = () => {
  son2.value.book += 1
}

const addAllBook = (refs) => {
  for (let key in refs) {
    refs[key].book += 1
  }
}
// 把数据暴露出去,其他组件可以直接操作
defineExpose({house})
</script>


<style scoped>
.father {
  background-color: rgb(148, 155, 158);
  padding: 10px;
  border-radius: 10px;
}
</style>