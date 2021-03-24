<template>
  <div>{{year}}年{{month}}月{{date}}日</div>
  <div>{{hours}}时{{minutes}}分{{seconds}}秒</div>
</template>

<script setup>
// util
import * as timeUtil from '@/util/time.js'
// css
import css from '@/styles/attrs.module.scss'

import { reactive, computed } from 'vue'

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

function setTime() {
  setInterval(() => {
    let nowTime = new Date()
    state.now = nowTime
  }, 1000)
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>


</style>