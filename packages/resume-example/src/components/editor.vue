<template>
    <div>
        <slot></slot>
    </div>
</template>

<script lang='ts'>
export default {
    name: 'Editor'
}
</script>

<script setup lang="ts">
import { onMounted, onUnMounted, ref, unref, reactive } from 'vue'
import { createEditor } from 'slate'

const props = defineProps({
    id: {
        type: Number,
        default: 0,
    }
})
const emits = defineEmits(['editor:update'])

const state = reactive({
    editorValue: ""
})

const editorRef = ref(null)
let editorInstance = unref(editorRef)

onMounted(() => {
    const options = {}
    editorInstance = new Object()
    state.editorValue?.onInput = function(val) {
        state.editorValue = val
        emits('editor:update', val)
    }
})

onUnMounted(() => {
    editorInstance = null
})
</script>
