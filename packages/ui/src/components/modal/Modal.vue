<template>
  <Teleport to="body">
    <div
      v-if="visible"
    >
      <header v-if="$slots.header">
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer v-if="$slots.footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </Teleport>
</template>

<script lang="ts">
export default {
  name: 'PModal'
}
</script>

<script setup lang="ts">
import { ref, watch, withDefaults } from 'vue';

type ModalProp = {
  modalValue?: boolean
}

const emits = defineEmits(['update:modalValue'])

const props = withDefaults(defineProps<ModalProp>(), {})
const visible = ref(props.modalValue || false)

function open() {
  visible.value = true
  emits('update:modalValue', true)
}

function close() {
  visible.value = false
  emits('update:modalValue', false)
}

watch(() => props.modalValue, (newValue) => {
  if (newValue) {
    open()
  } else {
    close()
  }
})

defineExpose({
  open,
  close,
})
</script>
