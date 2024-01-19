<template>
  <Docs :demos="demos" />
</template>

<script setup lang="ts">
import Docs from '../../../layouts/docs.vue'
import Usage from './usage.vue'

const demos = [
  {
    title: 'Usage',
    component: Usage
  }
]
</script>
