<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我+1</button>
    <hr>
    <img v-for="(dog, index) in dogList" :src="dog" :key="index">
    <br>
    <button @click="getDog">再来一只小狗</button>
  </div>
</template>

<script setup>
import useSum from '@/hooks/useSum.js'
import useDog from '@/hooks/useDog.js'
const { sum, add } = useSum()
const { dogList, getDog } = useDog()
</script>

<style scoped>
img {
  height: 100px;
}
</style>