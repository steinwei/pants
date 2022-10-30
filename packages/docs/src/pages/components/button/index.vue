<template>
    <Docs :demos="demos" />
</template>

<script setup lang="ts">
import Docs from "@/layouts/docs.vue";
import Usage from './usage.vue'
import Show from './show.vue'

const demos = [
    {
        title: 'usage',
        component: Usage
    }
]
</script>
