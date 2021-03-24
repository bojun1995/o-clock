<template>
  <div>{{year}}年{{month}}月{{date}}日</div>
  <div>{{hours}}时{{minutes}}分{{seconds}}秒</div>
</template>

<script setup>
// css
import css from '@/styles/attrs.module.scss'

import { reactive, computed, getCurrentInstance } from 'vue'

const state = reactive({
  now: new Date(),
  theme: '',
})

const year = computed(() => {
  return state.now.getFullYear()
})
const month = computed(() => {
  return state.now.getMonth()
})
const date = computed(() => {
  return state.now.getDate()
})
const hours = computed(() => {
  return state.now.getHours()
})
const minutes = computed(() => {
  return state.now.getMinutes()
})
const seconds = computed(() => {
  return state.now.getSeconds()
})

setTime()

const ctx = getCurrentInstance()

function setTime() {
  setInterval(() => {
    let nowTime = new Date()
    let test = $time
    state.now = nowTime
  }, 1000)
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
</style>