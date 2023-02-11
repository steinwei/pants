<script>
export default { name: 'PIcon' }
</script>

<script lang="ts" setup>
import { ref, computed, watchEffect, inject } from 'vue'
import { useTheme } from '../../composables'
import theme from './Icon.theme'

const computedIcon = ref('')

const props = defineProps({
  icon: {
    type: String,
  },
})

const { classes, styles } = useTheme('icon', theme, props)

function handleSvg() {}
function handleBase64() {}
function handleHttp() {}

const injectedKeys = 'base64'

const icons = inject(injectedKeys, () => ({}))
const isWrapSvg = ref(false)

watchEffect(() => {
  const injectedIcon = icons && icons[props.icon]

  computedIcon.value = injectedIcon

  if (injectedIcon) {
    if (typeof injectedIcon === 'string') {
      if (injectedIcon.startsWith('<svg')) {
        // envelope svg
      } else {
        isWrapSvg.value = false
        computedIcon.value = injectedIcon
      }
    } else if (typeof injectedIcon === 'object') {
      // todo
    }
  } else {
    computedIcon.value = injectedIcon
  }
})

</script>

<template>
  <template v-if="true">
    <svg :class="[...classes]" :style="{...styles}" />
  </template>
  <template v-else>
    <svg />
  </template>
</template>
