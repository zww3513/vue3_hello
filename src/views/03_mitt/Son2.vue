<template>
  <div class="Son2">
    <h3>子组件2</h3>
    <h4>玩具：{{ toy }}</h4>
    <button @click="sendToy(toy)">发送玩具</button>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import emitter from "@/utils/emitter";

defineOptions({
  name: 'Son2'
})

function sendToy() {
  // 触发事件
  emitter.emit('send-toy', toy.value)
}



let toy = ref('小猫')


</script>


<style scoped>
.Son2 {
  margin: 10px;
  background-color: rgb(22, 24, 179);
  padding: 10px;
  border-radius: 10px;
}
</style>