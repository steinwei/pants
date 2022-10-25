<template>
    <div class="flex">
        <Left @panel:update="updatePanel" @resume:update="updateResume" />
        <div class="border"></div>
        <Right :resume="state.resume" />
    </div>
</template>

<script lang="ts">
export default {
    name: 'App'
}
</script>

<script setup lang="ts">
import Left from './components/left.vue'
import Right from './components/right.vue'
import { reactive } from 'vue'

const state = reactive({
    resume: {
        school: {
            name: 'xxx school',
            value: 'time'
        },
        profile: {
            name: 'stein',
            age: 29,
            phone: '131xxxx3131',
        },
        work: {},
        project: {},
    },
    panel: 'list'
})

function updateResume(item: any) {
    console.log(item)
    Object.assign(state.resume, {...item})
}

function updatePanel(item: string) {
    console.log(item)
    state.panel = item
}

</script>
