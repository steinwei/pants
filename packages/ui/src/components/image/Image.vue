<template>
    <div>

    </div>
</template>

<script lang="ts">
export default {
    name: 'PImg'
}
</script>

<script lang="ts" setup>
import { PropType, ref } from 'vue'

const ref1 = ref(null)

const props = defineProps({
    test: {
        type: String as PropType<'test'>,
        default: '',
    }
})
</script>

<style></style>