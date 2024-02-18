import { createApp } from 'vue'
import { createPinia } from 'pinia'

//引入饿了么ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
//使用饿了么ui
app.use(ElementPlus)

app.mount('#app')
