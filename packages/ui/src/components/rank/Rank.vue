<template>
  <div class="p-rank-wrapper">
    <div>
      <div v-for="item in list">
        {{ item.name }}
        {{ item.rank }}
      </div>
    </div>
    <div @click="getMoreData">
      加载更多
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PRank'
}
</script>

<script setup lang="ts">
import { ref, onMounted, unref } from "vue";

type RankProp = {
  fetcher: (payloads: any) => Promise<any>
}

type RankItem = {
  name: string,
  rank: number,
}

const props = withDefaults(defineProps<RankProp>(), {})
const list = ref<RankItem[]>([])
const loading = ref(false)
const payloads = ref({
  page: 1,
  pageSize: 10,
})

async function getMoreData() {
  if (unref(loading)) {
    return
  }
  loading.value = true
  payloads.value.page++
  try {
    const res = await props.fetcher && props.fetcher(payloads.value)
    list.value = list.value.concat(res.data.list)
  } catch (error) {
    console.error(error)
  }
  loading.value = false
}

async function init() {
  try {
    const res = await props.fetcher && props.fetcher(payloads.value)
    list.value = [].concat(res.data.list)
  } catch (error) {
    console.error(error)
  }
}

onMounted(init)
</script>
