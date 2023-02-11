<template>
    <img :src="source" :class="[...classes]" />
</template>

<script lang="ts">
export default {
    name: 'PImage'
}
</script>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { useTheme } from '../../composables'
import theme from './Image.theme'

const fallback = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
const source = ref<string|undefined>(fallback)

const props = defineProps({
    onLoad: {
        type: Function,
    },
    src: {
        type: String,
    }
})

const { classes } = useTheme('image', theme, props)

function preload(src: string | undefined, onLoad: Function | undefined) {
  const image = new Image()
  image.src = src || ''
  image.onload = () => {
    onLoad?.()
  }
}

if(typeof window !== undefined && Image) {
  watch(() => props.src, (src) => {
    preload(src, props.onLoad)
  }, { immediate: true })
}

</script>
