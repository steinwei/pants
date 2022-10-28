<template>
    <component :is="htmlTag" :class="[
        classes.wrapper,
        className,
    ]"
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
import { ref, computed, useAttrs } from 'vue'
import type { PropType } from 'vue';
import { useTheme } from '../../composables/theme'
import theme from './Button.theme'

const elRef = ref(null)

const props = defineProps({
    type: {
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
    className: String,
    styles: Object,
    loading: Boolean,
    tag: {
        type: String,
        default: 'button'
    }
})

const { classes } = useTheme('button', theme, props)

const computedDisabled = computed(() => props.disabled)
const htmlTag = computed(() => props.tag)
</script>
