import { createApp } from 'vue'
import App from '@/App.vue'

import time from './time'

const app = createApp(App)
app.config.globalProperties.$time = time
