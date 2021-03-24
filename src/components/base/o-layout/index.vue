<template>
  <div class="layout-container">
    <date-time></date-time>
  </div>
</template>

<script setup>
// comp
import DateTime from '@/components/business/date-time/index.vue'

function initTheme() {
  window.document.documentElement.setAttribute('theme', '')
}

</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
@import '@/styles/attrs.module.scss';

.layout-container {
  background-color: $light_bg-color;
}
</style>