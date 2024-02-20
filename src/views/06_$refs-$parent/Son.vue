<template>
  <div class="Son">
    <h3>子组件</h3>
    <h4>书籍={{ book }}</h4>
    <button @click="reduceFatherHouse($parent)">父亲房产-1</button>
  </div>
</template>


<script setup>
import { ref } from 'vue'
defineOptions({
  name: 'Son'
})

const book = ref(1)

const reduceFatherHouse = (parent) => {
  console.log(parent);
  parent.house -=1
}

// 把数据暴露出去,其他组件可以直接操作
defineExpose({ book })

</script>


<style scoped>
.Son {
  margin: 10px;
  background-color: rgb(59, 161, 64);
  padding: 10px;
  border-radius: 10px;
}
</style>