<template>
  <div></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

// eslint 应当报错
const a = `${[]}`
const n = name

async function someFunc() { }

const foo1 = computed(async () => someFunc())
const tim = computed(() => {
  setTimeout(() => { }, 0)
})
const inter = computed(() => {
  setInterval(() => { }, 0)
})
</script>