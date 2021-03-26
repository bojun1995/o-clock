<template>
  <date-time></date-time>
</template>

<script setup>
import DateTime from '@/components/business/date-time/index.vue'
import { reactive, inject } from 'vue'


const util = inject('$util')

function onThemeChange(theme) {
  util.theme.setTheme(theme)
}


</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
</style>