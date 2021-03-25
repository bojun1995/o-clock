<template>
  <div class="layout-container">
    <date-time></date-time>
    <button @click="onThemeChange('light')">light</button>
    <button @click="onThemeChange('dark')">dark</button>
  </div>
</template>

<script setup>
// comp
import DateTime from '@/components/business/date-time/index.vue'
import { inject } from 'vue'

const util = inject('$util')

function onThemeChange(theme) {
  util.theme.setTheme(theme)
  console.log(util.theme.getTheme())
}

</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
@import '@/styles/_control.module.scss';

.layout-container {
  @include background_color('background-color_0');
}
</style>