<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  alt: string
  width?: string | number
  height?: string | number
  loading?: 'lazy' | 'eager'
  fetchpriority?: 'high' | 'low' | 'auto'
}>(), {
  width: undefined,
  height: undefined,
  loading: 'lazy',
  fetchpriority: 'auto',
})
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="loading"
    :fetchpriority="fetchpriority"
    decoding="async"
  >
</template>
