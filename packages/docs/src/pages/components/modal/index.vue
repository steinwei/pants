<template>
    <Docs :demos="demos" />
</template>

<script setup lang="ts">
import Usage from './usage.vue'

const demos = [
    {
        title: 'usage',
        component: Usage,
    }
]
</script>
