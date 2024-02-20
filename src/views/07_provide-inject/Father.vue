<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>资产：{{ money }}</h4>
    <h4>汽车：{{ car }}</h4>
    <button @click="money += 1">资产+1</button>
    <button @click="car.price += 1">汽车价格+1</button>
    <Son />
  </div>
</template>


<script setup>
import { ref, reactive, provide } from "vue";
import Son from './Son.vue'
// 数据
let money = ref(100)
let car = reactive({
  brand: '奔驰',
  price: 100
})
// 用于更新money的方法
const updateMoney = (value) => {
  money.value += value
}
// 提供数据
provide('moneyContext', { money, updateMoney })
provide('car', car)

</script>


<style scoped>
.father {
  background-color: rgb(148, 155, 158);
  padding: 10px;
  border-radius: 10px;
}
</style>