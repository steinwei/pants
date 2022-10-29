<template>
    <ul>
        <li v-for="comp in docsComponents" :key="comp.label" class="block text-center py-1 px-2 cursor-pointer" @click="() => $router.push(comp.to)">
            {{comp.label}}
        </li>
        <li v-for="comp in uiComponents" :key="comp.label" class="block text-center py-1 px-2 cursor-pointer" @click="() => $router.push(comp.to)">
            {{comp.label}}
        </li>
    </ul>
</template>

<script lang="ts">
export default {
    name: 'Menu',
    data() {
        return {
            uiComponents: [
                { to: '/component/button', label: 'Button' },
                { to: '/component/modal', label: 'Modal' },
            ],
            docsComponents: [
                { to: '/get-start', label: 'start' },
            ],
        }
    }
}
</script>
