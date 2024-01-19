<template>
  <div class="p-watermark-wrapper">
    <div :class="[
      'p-watermark-content',
      ...classes,
    ]"></div>
    <canvas :class="[
      'p-watermark-canvas',
      ...classes,
    ]"></canvas>
  </div>
</template>

<script>
export default {
  name: 'PWaterMark'
}
</script>

<script setup lang="ts">
import { ref, unref, onMounted } from 'vue'
import WaterMarkThemes from './WaterMark.theme.ts'

const props = defineProps({
  height: {
    type: Number,
    default: 100,
  },
  text: {
    type: String,
    default: '',
  },
  gapX: {
    type: Number,
    default: 0,
  },
  gapY: {
    type: Number,
    default: 0,
  },
  canvasWidth: {
    type: Number,
    default: 0,
  },
  canvasHeight: {
    type: Number,
    default: 0,
  }
});

const {
  classes,
  styles,
} = useTheme(WaterMarkThemes)
const canvasRef = ref(null)

function init() {
  const {
    gapX,
    gapY,
    x,
    y,
    text,
    canvasWidth,
    canvasHeight,
  } = props || {}

  canvasRef.value.width = canvasWidth
  canvasRef.value.height = canvasHeight
  const ctx = canvasRef.value.getContext('2d')
  const text = unref(text)
  // handle font family
  ctx.fillFont()
  // draw image
  ctx.drawImage(text, x, y, gapX, gapY)
}

onMounted(() => {
  init()
})
</script>

<style lang="scss">
.p-watermark-wrapper {}
</style>
