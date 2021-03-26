<template>
  <div class="layout-container">
    <o-clock></o-clock>
  </div>
</template>

<script setup>
// comp
import OClock from '@/views/o-clock/index.vue'
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
@import '@/styles/_control.module.scss';

.layout-container {
  @include background_color('background-color_0');
  @include color('color_0');
}
</style>