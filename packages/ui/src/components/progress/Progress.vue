<template>
  <div class="p-progress-wrapper">
    <div class="p-progress-value" :style="computedProgressValueStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'PProgress'
}
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  }
});

const computedProgressValueStyle = computed(() => {
  return {
    width: props.value + 'px'
  }
})
</script>

<style lang="scss">
.p-progress-wrapper {
  display: flex;
}

.p-progress-value {
  background-color: #eee;
}
</style>
