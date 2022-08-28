<script setup lang="ts">
import icons from 'assets/icons'
import { useAttrs } from 'vue';

const attrs = useAttrs()

const path = computed(() => {
  if (attrs.name && typeof attrs.name === 'string') {
    const icon = icons.find((icon) => icon.name === attrs.name)
    if(icon && icon.path) {
      return icon.path
    }
  }
  throw new Error(
    `The icon: "${attrs.name}" is either unregistered or does not exist in the "/assets/icons.ts"`
  )
})

</script>

<template>
  <svg
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path :d="path" />
  </svg>
</template>