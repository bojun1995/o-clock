import { createApp } from 'vue'
import App from './App.vue'

// css
import '@/styles/global.module.scss'
// global util
// import '@/util/install'

// import * as time from '@/util/time'
const testVal = 'testVal'
const app = createApp(App)
app.config.globalProperties.$time = testVal
window.$time = testVal

createApp(App).mount('#app')
