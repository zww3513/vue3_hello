<template>
  <div class="father">
    <h3>父组件</h3>

    <!-- 当自定义事件触发是，调用哪个方法 -->
    <Son :log="log" />

    <button @click="addLog">插入日志</button>
  </div>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue'
import Son from './Son.vue'

const log = ref("xxxxx")

const sse = ref(null)
sse.value = new EventSource("http://127.0.0.1:8888/sse")
sse.value.onopen= () => {
  console.log("open")
}
sse.value.addEventListener("output", (e) => {
  console.log(e.data)
  console.log(typeof e.data)
  if (e.data == '2'){
    console.log("close")
    sse.value.close()
  }
})
sse.value.onerror = (err) => {
  console.log("error",err)
  sse.value.close()
}

const addLog = () => {
  let a = { "name": "zww", "age": 18 }
  let aStr = JSON.stringify(a, null, 4)
  log.value = aStr
  //log.value = log.value + 'appstore_battle(65535)(172.16.60.157:116): [33m Game_ver:49401, Start:(2024-02-28 16:21:35), Run_time:2327794, Mem:171MB/15617MB,Cpu:0.8%,filter:jaNormal,meta=[zone:ja env:normal] [0m' + '\r\n'
}

</script>


<style scoped>
.father {
  background-color: rgb(148, 155, 158);
  padding: 10px;
  border-radius: 10px;
}
</style>