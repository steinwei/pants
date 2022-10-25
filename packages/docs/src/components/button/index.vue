<script lang="ts">
export default {
    name: 'ButtonExample'
}
</script>

<script setup lang="ts">
import { Button } from '@pants/ui'
</script>

<template>
    <div>
        <Button type="primary">primary</Button>
        <Button type="default">default</Button>
        <Button disable>disabled</Button>
        <Button type="danger">danger</Button>
    </div>
</template>
