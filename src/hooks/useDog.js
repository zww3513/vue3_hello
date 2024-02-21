import { reactive } from 'vue'
import axios from 'axios'

export default () => {
  //数据
  let dogList = reactive([])
  //方法
  const getDog = async () => {
    try {
      const result = await axios.get('https://dog.ceo/api/breeds/image/random')
      dogList.push(result.data.message)
    } catch (error) {
      alert(error)
    }
  }
  //向外暴露
  return { dogList, getDog }
}