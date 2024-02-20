<template>
  <div class="GrandSon">
    <h3>孙组件</h3>
    <h4>资产：{{ money }}</h4>
    <h4>汽车：{{ car }}</h4>
    <button @click="updateMoney(6)">点我资产+6</button>
  </div>
</template>


<script setup>
import { inject } from 'vue';
defineOptions({
  name: 'GrandSon'
})
// 注入数据
let { money, updateMoney } = inject('moneyContext', { money: 0, updateMoney: (num) => { } })
let car = inject('car')
</script>


<style scoped>
.GrandSon {
  margin: 10px;
  background-color: rgb(216, 35, 105);
  padding: 10px;
  border-radius: 10px;
}
</style>