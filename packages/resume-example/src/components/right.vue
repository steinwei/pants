<template>
    <ul class="border">
       <li :key="key" v-for="block, key in resume">
            <div :key="itemKey" v-for="itemValue, itemKey in block" :class="{'border': key == 'profile' || key == 'school', 'visible': true}"
@click=""
            >
                <p>{{itemKey}}: {{itemValue}}</p>
            </div>
       </li> 
    </ul>
</template>

<script lang="ts">
export default {
    name: 'Right'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { SceneId } from './utils'

const emits = defineEmits(['panel:update'])

const props = defineProps({
    sceneId: "",
    resume: {
        type: Object,
        default: {},
    }
})

const resume = computed(() => props.resume || {})
const sceneId = computed(() => props.sceneId || 0)

function showPanel(item) {
    console.log(item, SceneId[item])
    emits('panel:update', item)
}

</script>
