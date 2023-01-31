<template>
    <span :class="[...classes]">
        <slot></slot>
    </span>
</template>

<script lang="ts" setup>
import { useTheme } from "../../../lib";
import spinTheme from "./spin.theme";

const { classes } = useTheme('p-spin', spinTheme, {})
</script>

<style scoped lang="postcss">

</style>