<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>a={{a}}</h4>
    <h4>b={{b}}</h4>
    <Son :a="a" :b="b" />
  </div>
</template>


<script setup>
import { ref } from 'vue'
import Son from './Son.vue'

const a = ref('value-a')
const b = ref('value-b')

</script>


<style scoped>
.father {
  background-color: rgb(148, 155, 158);
  padding: 10px;
  border-radius: 10px;
}
</style>