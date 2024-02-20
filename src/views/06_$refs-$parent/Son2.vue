<template>
  <div class="Son2">
    <h3>子组件</h3>
    <h4>书籍={{ book }}</h4>
  </div>
</template>


<script setup>
import {ref} from 'vue'
defineOptions({
  name: 'Son2'
})

const book=ref(20)

// 把数据暴露出去,其他组件可以直接操作
defineExpose({book})

</script>


<style scoped>
.Son2 {
  margin: 10px;
  background-color: rgb(221, 192, 30);
  padding: 10px;
  border-radius: 10px;
}
</style>