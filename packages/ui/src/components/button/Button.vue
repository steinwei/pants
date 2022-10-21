<template>
    <component :is="" :type="type" >
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
import { defineProps, type PropType, ref } from 'vue'
import { useTheme } from '../../utils/theme'

const props = defineProps({
    type: {
        type: String as PropType<'default' | 'primary' | 'danger' | 'disabled'>,
        default: 'default',
    }
})
</script>
