<template>
  <o-layout />
</template>

<script setup>
// comp
import OLayout from '@/components/base/o-layout/index.vue'
import { provide } from 'vue'
// global util
import util from '@/util/install'
provide('$util', util)
// init theme
util.theme.setTheme()

</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
#app {
  height: 100%;
}
</style>