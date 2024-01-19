<template>
  <div>
    {{ computedRest }}
  </div>
</template>

<script lang="ts">
import { ref, onBeforeUnmount, computed, onMounted, watch, withDefaults } from 'vue'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

export default {
  name: 'PCountdown'
}
</script>

<script lang="ts" setup>
type CountdownType = {
  current: number
  millsecond?: boolean
  onDestory?: () => void
  onTick?: (timestampe?: number) => void
  delay?: number
  autoStart?: boolean
  paused?: boolean
  onPaused?: (timestamp?: number) => void
  onRestart?: (timestamp?: number) => void
}

const props = withDefaults(defineProps<CountdownType>(), {
  millsecond: true,
  delay: 0,
})


const current = ref(props.current)
const timer = ref<any>(null)
const remainTime = ref(0)
const endTime = ref(0)
const delay = computed(() => props.delay || 0)
const computedRest = computed(() => format(remainTime.value))
const showMillseconds = computed(() => props.millsecond)
const isInited = ref(false)
const counting = ref(false)

function tick() {
  timer.value = requestAnimationFrame(() => {
    if (counting.value) {
      const now = Math.max(0, new Date().getTime() - delay.value)
      remainTime.value = Math.max(0, endTime.value - now)

      if (remainTime.value === 0) {
        counting.value = false
        props.onDestory && props.onDestory()
        return
      }
      if (remainTime.value > 0) {
        tick()
        props.onTick && props.onTick()
      }

    }
  })
}

function format(timestamp: number) {
  const rest = {
    d: 0,
    h: 0,
    m: 0,
    s: 0,
    ms: 0,
  };

  if (timestamp > 0) {
    rest.d = Math.floor(timestamp / DAY);
    rest.h = Math.floor((timestamp % DAY) / HOUR);
    rest.m = Math.floor((timestamp % HOUR) / MINUTE);
    rest.s = Math.floor((timestamp % MINUTE) / SECOND);
    rest.ms = Math.floor(timestamp % SECOND);
  }

  if (!showMillseconds.value) {
    return `${rest.d}:${rest.h}:${rest.m}:${rest.s}`
  }

  return `${rest.d}:${rest.h}:${rest.m}:${rest.s}:${rest.ms}`
}

function destory() {
  if (timer.value) {
    cancelAnimationFrame(timer.value)
    timer.value = null
    props.onDestory && props.onDestory()
  }
}

function stop() {
  if (timer.value) {
    cancelAnimationFrame(timer.value)
    counting.value = false
    props.onPaused && props.onPaused(remainTime.value)
  }
}

function init() {
  isInited.value = true
  endTime.value = new Date().getTime() + Number(current.value)
  counting.value = true
  tick()
}

watch(() => props.paused, (newValue) => {
  if (isInited.value) {
    if (newValue) {
      if (counting.value) {
        stop()
      }
    } else {
      if (!counting.value) {
        counting.value = true
        endTime.value = Number(remainTime.value) + new Date().getTime()
        tick()
      }
      props.onRestart && props.onRestart(remainTime.value)
    }
  }
})

onMounted(() => {
  if (props.autoStart) {
    init()
  } else {
    remainTime.value = current.value
  }
  if (!isInited.value) {
    isInited.value = true
  }
})

onBeforeUnmount(() => {
  destory()
})

</script>
