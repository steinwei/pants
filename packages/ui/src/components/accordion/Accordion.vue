<template>
  <div class="p-accordion-wrapper">
    <div class="p-accordion-view" :style="wrapperStyle">
      <div class="p-accordion-view-item" v-for="item in items">
        {{ item }}
      </div>
    </div>
    <button class="p-accordion-toggle-button" @click="toggle">toggle accordion animation</button>
  </div>
</template>

<script>
export default {
  name: 'PAccordion',
}
</script>

<script setup lang="ts">
import { ref, watch, unref } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
  withTabs: {
    type: Boolean,
    default: false,
  }
});

console.log(props, 'props');

const toggleState = ref(false);
const wrapperStyle = ref({
  "background-color": "#fff",
  "height": "0",
  "overflow": "hidden",
  "transition": "1s",
});

function toggle() {
  toggleState.value = !unref(toggleState);
}
function close() {
  toggleState.value = false;
}
function open() {
  toggleState.value = true;
}
function animate() {
  const run = () => {
    wrapperStyle.value.height += 1;
  };
  window.requestAnimationFrame(run);
}

watch(toggleState, (value) => {
  if (value) {
    animate();
  } else {
    // ...
  }
})
</script>

<style lang="scss">
.accordion-wrapper {
  display: flex;
  flex-direction: column;
}

.accrodion-item {
  height: 200px;
}
</style>
