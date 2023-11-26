<template>
  <div>
    <div v-for="barrage in barrages" :style="barrage.styleInfo">
      {{ barrage.text }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PBarrage'
}
</script>

<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted } from 'vue'

type BarrageProp = {
  rows: number
  trackWidth?: number
  trackHeight?: number
  barrages: BarrageItemPropType[]
}

type BarrageItemPropType = {
  text: string
}

type BarrageItemType = {
  text: string
  styleInfo: any
}

const props = withDefaults(defineProps<BarrageProp>(), {
  rows: 3,
  trackWidth: 2000,
  trackHeight: 2000,
})

const barrages = ref<BarrageItemType[]>([])

function makeStyleInfo(index: number) {
  return {
    top: getNodeTop(index),
    animation: '',
    width: '',
    transition: '',
  }
}
function getNodeTop(index: number) {
  return ''
}
function addBarrage(barrage: BarrageItemType) {
  barrages.value.push(barrage)
}

function init() {
  props.barrages.forEach((barrage, index) => {
    addBarrage({
      text: barrage.text,
      styleInfo: makeStyleInfo(index)
    })
  })
}

function destory() { }

onMounted(() => {
  init()
})

onBeforeUnmount(() => {
  destory()
})

defineExpose({
  addBarrage,
})
</script>
