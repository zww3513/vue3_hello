<template>
  <div class="father">
    <h2>
      name: {{ name }}
    </h2>
    <input type="text" v-model="name">
    <br>
    自定义组件
    <AtguiguInput v-model="name" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AtguiguInput from './AtguiguInput.vue';

const name = ref("zww")

</script>

<style scoped>
.father {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
}
</style>