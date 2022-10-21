<template>
    <component>
        
    </component>
</template>

<script>
export default {
    name: "PNotifaction"
}
</script>

<script setup lang="ts">
import { defineExpose } from 'vue'

const doms = ref([])

function info(msg: string) {}

function warn(msg: string) {}

function add() {

}

defineExpose({
    info,
    warn,
})
</script>
