<script>
export default {
    name: 'ModalExample'
}
</script>

<script setup lang="ts">
import { Modal, Button } from '@pants/ui'
import { reactive } from 'vue'

const state = reactive({
    visible: false,
})

function showModal() {
    state.visible = true
}

</script>

<template>
    <div>
        <Button @click="showModal" type="primary">
            show modal
        </Button>
        <Modal :visible="visible">
            <div>this is slot.</div>
        </Modal>
    </div>
</template>
