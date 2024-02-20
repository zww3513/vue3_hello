<template>
  <div class="GrandSon">
    <h3>孙组件</h3>
    <h4>a={{a}}</h4>
    <h4>b={{b}}</h4>
  </div>
</template>


<script setup>
import GrandSon from './GrandSon.vue'
defineOptions({
  name: 'GrandSon'
})

defineProps(['a','b'])



</script>


<style scoped>
.GrandSon {
  margin: 10px;
  background-color: rgb(216, 35, 105);
  padding: 10px;
  border-radius: 10px;
}
</style>