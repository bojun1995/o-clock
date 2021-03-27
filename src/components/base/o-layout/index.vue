<template>
  <div class="layout-container">
    <o-clock-page></o-clock-page>
  </div>
</template>

<script setup>
// comp
import OClockPage from '@/views/o-clock-page/index.vue'
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
@import '@/styles/_control.module.scss';

.layout-container {
  height: 100%;
  @include background_color('background-color_0');
  @include color('color_0');
}
</style>