<template>
  <div class="p-card-wrapper">
    <div class="p-card-header-border" v-if="withBorders"></div>
    <div class="p-card-content">
      <slot></slot>
    </div>
    <div class="p-card-footer-border" v-if="withBorders"></div>
  </div>
</template>

<script>
export default {
  name: 'PCard'
}
</script>

<script setup lang="ts">
const props = defineProps({
  withBorders: {
    type: Boolean,
    default: true,
  }
});
</script>

<style lang="scss">
.p-card-wrapper {
  background-color: #FFFFFF;
}
</style>
