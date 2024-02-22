<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { useTalkStore } from '@/stores/talk.js'

const talkStore = useTalkStore()
//方法
function getLoveTalk() {
  talkStore.getATalk()
}
</script>


<style scoped>
.talk {
  background-color: rgb(135, 235, 177);
  padding: 10px;
  border-radius: 10px;
}
</style>