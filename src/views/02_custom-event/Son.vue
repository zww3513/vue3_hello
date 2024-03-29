<template>
  <div class="Son">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>

    <!-- 通过点击触发自定义事件，后面是数据 -->
    <button @click="emit('send-toy', toy)">发送玩具</button>
  </div>
</template>


<script setup>
import { ref ,onMounted} from 'vue'
defineOptions({
  name: 'Son'
})

//声明一个事件
const emit = defineEmits(['send-toy'])



let toy = ref('小熊')

onMounted(()=>{
  setTimeout(()=>{
    emit('send-toy','通过定时器触发自定义事件')
  },6000)
})

</script>


<style scoped>
.Son {
  margin: 10px;
  background-color: rgb(59, 161, 64);
  padding: 10px;
  border-radius: 10px;
}
</style>