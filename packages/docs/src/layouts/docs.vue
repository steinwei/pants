<template>
    <div>
        <div v-for="item in demos" :key="item.title">
            <h3>{{item.title}}</h3>
            <component :is="item.component" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Component, PropType } from 'vue';

interface DemosPropsInterface {
    title: string
    component: Component
}

const props = defineProps({
    demos: {
        type: Array as PropType<Array<DemosPropsInterface>>,
        default: [],
    }
})
</script>