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
.layout-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>