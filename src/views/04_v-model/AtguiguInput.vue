<template>
  <div class="box">
    <!--将接收的value值赋给input元素的value属性，目的是：为了呈现数据 -->
    <!--给input元素绑定原生input事件，触发input事件时，进而触发update:model-value事件-->
    <input type="text" :value="modelValue" @input="emit('update:model-value', ($event.target).value)">
  </div>
</template>
  
<script setup >
defineOptions({
  name: 'AtguiguInput'
})

// 接收props
defineProps(['modelValue'])
// 声明事件
const emit = defineEmits(['update:model-value'])
</script>
  

<style scoped>
input {
  border: 2px solid black;
  background-image: linear-gradient(45deg, red, yellow, green);
  height: 30px;
  font-size: 20px;
  color: white;
}
</style>