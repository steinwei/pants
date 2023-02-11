<template>
    <span :class="[...classes]">
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: 'PSpin'
}
</script>

<script lang="ts" setup>
import { useTheme } from "@/composables/theme";
import spinTheme from "./spin.theme";

const { classes } = useTheme('p-spin', spinTheme, {})
</script>

<style scoped lang="postcss">

</style>