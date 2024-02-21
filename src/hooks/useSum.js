import { ref } from 'vue'

export default () => {
  //数据
  let sum = ref(0)
  //方法
  const add = () => {
    sum.value += 1
  }
  //向外暴露
  return { sum, add }
}