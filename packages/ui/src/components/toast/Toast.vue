<template>
  <Teleport to="body">
    <div v-if="visible">
      {{ msg }}
    </div>
  </Teleport>
</template>

<script lang="ts">
export default {
  name: "PToast"
}
</script>

<script setup lang="ts">
import { ref, watch } from 'vue';

type ToastOptionType = {
  text: string
  duration?: number
}

const props = withDefaults(defineProps<ToastOptionType>(), {
  duration: 2000,
})

const msg = ref("")
const visible = ref(false)

function open() {
  visible.value = true
}

function close() {
  setTimeout(() => {
    visible.value = false
  }, props.duration)
}

function showToast(options: ToastOptionType): void
function showToast(options: string): void
function showToast(options: any): void {
  open()
  if (typeof options === 'string') {
    return
  }
  return
}
function showLoading(options: ToastOptionType): void
function showLoading(options: string): void
function showLoading(options: any): void {
  open()
  if (typeof options === 'string') {
    return
  }
  return
}

watch(visible, (newValue) => {
  if (newValue) {
    close()
  }
})

defineExpose({
  showToast,
  showLoading,
})
</script>
