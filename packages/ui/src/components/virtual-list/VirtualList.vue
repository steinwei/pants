<template>
  <div class="p-virtual-list-wrapper">
    <slot></slot>
    <div></div>
  </div>
</template>

<script setup>
export default {
  name: 'PVirtualList'
}
</script>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  itemHeight: {
    type: Number,
    default: 200,
  },
  itemWidth: {
    type: Number,
    default: 200,
  },
  dataSource: {
    type: Array,
    default: [],
  },
  padding: {
    type: Number,
    default: 2,
  }
});

const start = ref(0)
const end = ref(0)
const list = computed(() => props.dataSource.slice(start.value, end.value)).value
const virtualList = ref([])

function computedPaddingStyle() {
  return {
    height: computedPaddingheight + 'px'
  }
}
function computedPaddingheight() {
  return props.padding
}
function makeVirtualList() {
  const nums = Array.from({ length: props.dataSource.length }).map((_, index) => {
    return {
      top: index * props.itemHeight,
      bottom: (index + 1) * props.itemHeight,
    }
  })
  virtualList.value = nums
}
function computedStart() { }
function computedEnd() { }
function computedStartWithScroll() { }
function computedEndWithScroll() { }
function handleScroll(e: any) {
  const scrollTop = e.target.scrollTop
  findIndex() 
}
function init() {
  makeVirtualList()
}

onMounted(() => {
  init();
})
</script>

<style lang="scss"></style>
