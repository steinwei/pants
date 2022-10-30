<template>
    <component :is="htmlTag" :class="[
        $style['button'],
        className,
        classes.wrapper,
    ]"
    :type="type"
    :style="styles"
    ref="elRef"
    :disabled="computedDisabled || loading"
    >
        <span>
            <slot></slot>
        </span>
    </component>
</template>

<script lang="ts">
export default {
    name: "PButton"
}
</script>

<script lang="ts" setup>
import { ref, computed, unref } from 'vue'
import type { PropType } from 'vue';
import { useTheme } from '../../composables/theme'
import theme from './Button.theme'

const elRef = ref(null)

const props = defineProps({
    color: {
        type: String as PropType<'default' | 'primary' | 'danger' | 'disabled'>,
        default: 'default',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    rounded: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: 'button'
    },
    size: String as PropType<'sm' | 'xs' | 'md' | 'lg'>,
    className: String,
    loading: Boolean,
    tag: {
        type: String,
        default: 'button'
    }
})

const { classes, styles } = useTheme('button', theme, props)

const computedDisabled = computed(() => props.disabled)
const htmlTag = computed(() => props.tag)
</script>

<style scoped module lang="postcss">
.button {
    color: var(--p--button-text);
    background-color: var(--p-button-bg);
    border-color: var(--p-button-border);
}
</style>