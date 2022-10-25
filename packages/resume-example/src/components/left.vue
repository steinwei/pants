<template>
    <ul>
        <li :key="(item)" v-for="item in navlist" class="p-2" @click="showPanel(item)" v-if="scene == SceneId['null']">
            {{item}}
        </li> 
        <li v-if="scene != SceneId['null']">
            <Editor @editor:update="makeValueUpdate" />
        </li>
    </ul>
</template>

<script lang="ts">
export default {
    name: "Left"
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import Editor from './editor.vue'
import { SceneId } from './utils'

const emits = defineEmits(['panel:update'])
const props = defineProps({
    navlist: {
        type: Array<string>,
        default: ['profile', 'work', 'project', 'school', 'skill'],
    },
    scene: {
        type: Number,
        default: SceneId['null'],
    }
})

const editorValueRef = ref("")

function showPanel(item: string) {
    emits('panel:update', item)
}

function makeValueUpdate(val: string) {
    editorValueRef.value = val
    // TODO: update panel value
}
</script>
