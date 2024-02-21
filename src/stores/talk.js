// 组合式api写法
// 引入defineStore用于创建store
import axios from 'axios'
import { nanoid } from 'nanoid'
import { defineStore } from 'pinia'

// 定义并暴露一个store
export const useTalkStore = defineStore('talk', {
  // 动作
  actions: {
    async getATalk() {
      //发送请求
      let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
      //把请求回来的字符串，包装成一个对象
      let obj = { id: nanoid(), title }
      //放到数字中去
      this.talkList.unshift(obj)
    }
  },
  // 状态
  state() {
    return {
      talkList: [
        { id: 'yuysada01', title: '你今天有点怪，哪里怪？怪好看的！' },
        { id: 'yuysada02', title: '草莓、蓝莓、蔓越莓，你想我了没？' },
        { id: 'yuysada03', title: '心里给你留了一块地，我的死心塌地' }
      ]
    }
  },
  // 计算
  getters: {}
})
