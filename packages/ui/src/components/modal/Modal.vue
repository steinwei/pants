<template>
    <component :class="[
        ...classes,
        props.visible ? 'visible' : 'invisible ease-out-5s'
    ]">
    
    </component>
</template>

<script lang="ts">
export default {
    name: "Modal"
}
</script>

<script setup lang="ts">
import { ref, defineProps, defineEmits, Type PropType } from 'vue'
import { useTheme } from '../../utils'

const props = defineProps({
    visible: {
        type: String,
        default: false,
    },
    size: {
        type: String as PropType<'xs' | 'md' | 'lg'>,
        default: 'md',
    }
});

const visible = ref(props.visible || false)
const size = ref(props.size)

const emits = defineEmits(['modal:update'])
const { classed } = useTheme('modal')

watch(visible, () => {
    if(visible.value) {
        open()
    } else {
        close()
    }
})

watch(()=> props.visible, () => {
    
})

function keydown(event: KeyboardEvent) { 
    if(event.key == 'Escape') close()
}

function close() {
    visible.value = false
    setTimeout(() => {
        visible.value = false
        emits['modal:update', false]
    }, 300);
}

function open() {
    visible.value = true
    setTimeout(() => {
        visible.value = true
        emits['modal:update', true]
    }, 300);
}

</script>

<style scoped module>

</style>
