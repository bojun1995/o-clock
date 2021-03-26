<template>
  <div class="page_container">
    <div class="clock_row">
      <clock></clock>
    </div>
  </div>
</template>

<script setup>
import Clock from '@/components/business/clock/index.vue'
import { reactive, inject } from 'vue'


const util = inject('$util')

function onThemeChange(theme) {
  util.theme.setTheme(theme)
}


</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.page_container {
  display: flex;
}
.clock_row {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10%;
}
</style>