<template>
  <div class="Son">
    <h3>子组件</h3>
    <div v-loading="loading" ref="terminal" element-loading-text="拼命连接中"></div>
  </div>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue'

import { Terminal } from 'xterm'
import { FitAddon } from "xterm-addon-fit";

import 'xterm/css/xterm.css'

const loading = false
const terminal = ref(null);
const term = ref(null);
const fitAddon = new FitAddon();

const initTerm = () => {
  term.value = new Terminal({
    lineHeight: 1.2,
    fontSize: 12,
    fontFamily: "Monaco, Menlo, Consolas, 'Courier New', monospace",
    theme: {
      background: '#181d28',
    },
    // 光标闪烁
    cursorBlink: true,
    cursorStyle: 'underline',
    scrollback: 100,
    tabStopWidth: 4,
  });
  term.value.open(terminal.value);
  term.value.loadAddon(fitAddon);
  // 不能初始化的时候fit,需要等terminal准备就绪,可以设置延时操作
  setTimeout(() => {
    fitAddon.fit();
  }, 5)
}

onMounted(() => {
  initTerm();
  addLog(props.log)
})

const addLog = (log) => {
  term.value.clear()
  let log_list=log.split('\n')
  for (let line of log_list){
    term.value.writeln(line)
  }
}
const props = defineProps(['log'])
watch(() => props.log, () => {
  addLog(props.log)
})


defineOptions({
  name: 'Son'
})

</script>


<style scoped>
.Son {
  margin: 10px;
  background-color: rgb(59, 161, 64);
  padding: 10px;
  border-radius: 10px;
}
</style>