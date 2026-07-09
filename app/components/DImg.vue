<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  alt: string
  width?: string | number
  height?: string | number
  loading?: 'lazy' | 'eager'
}>(), {
  width: undefined,
  height: undefined,
  loading: 'lazy',
})
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="loading"
    decoding="async"
  >
</template>
