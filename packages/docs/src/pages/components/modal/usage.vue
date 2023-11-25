
<template>
    <div>
        <p-button type="primiary" @click="open">open modal</p-button>
        <p-modal
          :modalValue="visible"
            @update:modalValue="test"
          >
          <template #header>
            <div>
            this is header.
            </div>
          </template>
          <div>
            this is content.
          </div>
          <template #footer>
            <div>
              this is footer.
            </div>
          </template>
        </p-modal>
    </div>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue'

const visible = ref(false)

function open() {
  visible.value = !unref(visible)
}

function test(val: boolean) {
  console.log(val)
}

</script>
