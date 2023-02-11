<template>
    <teleport to="body">
        <div :class="[...classes.wrapper]" :style="[...styles]">
            <p>{{ message }}</p>
        </div>
    </teleport>
</template>

<script>
export default { name: 'PToast' }
</script>

<script lang="ts" setup>
import { computed, ref, unref } from 'vue';
import { useTheme } from '../../../lib';
import ToastTheme from './Toast.theme';

const message = ref('')
const loading = ref(false)

const computedLoading = computed(() => unref(loading))
const computedMessage = computed(() => unref(message))

const { classes, styles} = useTheme('ptoast', ToastTheme, {})

const props = defineProps({
    msg: {
        type: String,
        default: '',
    }
})

function info(text: string) {
    message.value = text

}
function error() {}
function warn() {} 

defineExpose({
    info,
    error,
    warn,
})

</script>

<style lang="postcss">
.p-toast {

}
</style>