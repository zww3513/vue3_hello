// 组合式api写法
// 引入defineStore用于创建store
import { defineStore } from 'pinia'

// 定义并暴露一个store
export const useCountStore = defineStore('count', {
  // 动作函数
  actions: {
    increment(value) {
      if (this.sum < 10) {
        this.sum += value
      }
    }
  },
  // 状态
  state() {
    return {
      sum: 6
    }
  },
  // 计算属性
  getters: {}
})
