<template>
  <div class="clock_container">
    <div>{{year}}年{{month}}月{{date}}日</div>
    <div>{{hours}}时{{minutes}}分{{seconds}}秒</div>
  </div>
</template>

<script setup>
import { reactive, computed, inject } from 'vue'

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

getTime()

function getTime() {
  setInterval(() => {
    let nowTime = new Date()
    state.now = nowTime
  }, 1000)
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.clock_container {
  width: 1200px;
  height: 500px;
  background-color: rgb(47, 47, 63);
}
</style>