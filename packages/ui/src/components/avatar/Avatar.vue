<template>
  <div class="p-avatar-wrapper">
    <img src="source" alt="" class="p-avatar-image">
  </div>
</template>

<script>
export default {
  name: 'PAvatar'
}
</script>

<script setup lang="ts">
const props = defineProps({
  source: {
    type: String,
    default: '',
  }
});

// maybe preload image
</script>

<style lang="scss">
.p-avatar-wrapper {
  display: flex;
}

.p-avatar-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
</style>
