<template>
    <div>
        <p-button @click="open">showModal</p-button>
        <p-modal :visible="state.visible">
            <template #header>
                this is header.
            </template>
        </p-modal>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { PModal, PButton } from '@pants/ui'

const state = reactive({
    visible: false,
    visible1: false,
    visible2: false,
})

function open() {
    state.visible = true
}

</script>