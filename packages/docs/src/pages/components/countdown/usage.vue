<template>
    <div>
        <p-button @click="start">startCountdown</p-button>
        <p-countdown
          :paused="paused"
          :onPaused="onPaused"
            :autoStart="true"
          ></p-countdown>
    </div>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue'

const paused = ref(false)

function start() {
  paused.value = !unref(paused)
}

function onPaused(val?: number) {
  console.log(val)
}
</script>
