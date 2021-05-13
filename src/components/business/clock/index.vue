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

let year = computed(() => {
  return state.now.getFullYear()
})
let month = computed(() => {
  return state.now.getMonth()
})
let date = computed(() => {
  return state.now.getDate()
})
let hours = computed(() => {
  return state.now.getHours()
})
let minutes = computed(() => {
  return state.now.getMinutes()
})
let seconds = computed(() => {
  return state.now.getSeconds()
})

refreshTime()

function refreshTime() {
  setInterval(() => {
    let nowTime = new Date()
    state.now = nowTime
  }, 1000)
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
$clock_height: 45vh;
$clock_width: calc(#{$clock_height} * 2);

.clock_container {
  height: $clock_height;
  width: $clock_width;
  background-color: rgba(47, 47, 63, 0.548);

  display: flex;
  flex-direction: row;
}
</style>