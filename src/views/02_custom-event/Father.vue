<template>
  <div class="father">
    <h3>父组件</h3>
    <button @click="test(5)">点我</button>

    <!-- 当自定义事件触发是，调用哪个方法 -->
    <Son @send-toy="saveToy"/>
  </div>
</template>


<script setup>
import Son from './Son.vue'


function test(value){
  console.log("test",value)
}
const saveToy = (val) =>{
  console.log("value",val)
}

</script>


<style scoped>
    .father {
        background-color: rgb(148, 155, 158);
        padding: 10px;
        border-radius: 10px;
    }   
</style>