<template>
  <p-barrage :loop="true" :barrages="barrages"></p-barrage>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const barrages = ref([])
</script>
