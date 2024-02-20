<template>
  <div class="father">
    <h3>父组件</h3>
    <Son1 />
    <Son2 />
  </div>
</template>


<script setup>
import Son1 from './Son1.vue'
import Son2 from './Son2.vue'


</script>


<style scoped>
.father {
  background-color: rgb(148, 155, 158);
  padding: 10px;
  border-radius: 10px;
}
</style>