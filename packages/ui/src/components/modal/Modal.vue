<script lang="ts">
export default {
    name: 'PModal'
}
</script>

<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import theme from './Modal.theme'
import { useTheme } from "../../composables";
import { useEventListener } from '@vueuse/core'

const props = defineProps({
    tag: {
        type: String,
        default: 'modal'
    },
    value: Boolean,
    visible: Boolean,
    className: String,
})

const emits = defineEmits(['update:modal'])
const { classes } = useTheme('modal', theme, props)

const modalRef = ref(null)

const state = reactive({
    visible: false,
    confirm: false,
})

watch(() => props.visible, () => {
    state.visible = props.visible
    if (state.visible) {
        open()
    } else {
        close()
    }
})

if (window != undefined) useEventListener(document, 'keydown', onKeyDown)

function open() {
    state.visible = true
    emits('update:modal', true)
}

function close() { 
    state.visible = false
    emits('update:modal', false)
    if (state.confirm) {
        state.confirm = false
    }
}

function confirm() {
    open()
    state.confirm = true
}

function onKeyDown(event: KeyboardEvent) {
    if (event.key == 'Escape' && state.visible) {
        close()
    }
}

defineExpose({
    open,
    close,
    confirm,
})
</script>

<template>
    <teleport to="body">
        <div :class="[classes.wrapper, className]" v-if="state.visible">
            <div ref="modalRef" class="">
                <div v-if="$slots.header" :class="classes.header">
                    <slot name="header"></slot>
                    <!-- TODO: replace with icon x -->
                    <div class="py-1 px-2 border" @click="close">
                        X
                    </div>
                </div>
                <div :class="classes.content">
                    <slot></slot>
                </div>
                <div v-if="!$slots.footer && state.confirm" @click="close">
                    I Got It!
                </div>
                <div v-if="$slots.footer" :class="classes.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </teleport>
</template>