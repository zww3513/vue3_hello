<template>
  <Codemirror v-model:value="code" :options="cmOptions" :border="false" ref="cmRef" height="100%" width="100%">
  </Codemirror>
</template>
<script setup>
import { ref,watch, defineProps, onMounted, onUnmounted } from "vue"
import "codemirror/mode/javascript/javascript.js"
import Codemirror from "codemirror-editor-vue3"

defineOptions({
  name: 'Log'
})



const props = defineProps(['log'])
const code=ref(props.log)
watch(() => props.log, () => {
  code.value=props.log
})

const cmRef = ref('')
const cmOptions = {
  mode: "log",
  theme: "default",
  readOnly: true
}


</script>
