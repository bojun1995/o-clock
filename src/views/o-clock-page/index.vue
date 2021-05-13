<template>
  <div class="page_container">
    <div>
      <button @click="onThemeChange('light')">light</button>
      <button @click="onThemeChange('dark')">dark</button>
    </div>
    <div class="_clock">
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
@import '@/styles/_control.module.scss';

.page_container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @include background_color('background-color_0');
  @include color('color_0');
}
._clock {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}
</style>