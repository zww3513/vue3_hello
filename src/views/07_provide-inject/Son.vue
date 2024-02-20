<template>
  <div class="Son">
    <h3>子组件</h3>
    <GrandSon />
  </div>
</template>


<script setup>
import GrandSon from './GrandSon.vue'
defineOptions({
  name: 'Son'
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