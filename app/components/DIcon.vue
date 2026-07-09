<script setup lang="ts">
import icons from '~/assets/icons'

const props = defineProps<{ name: string }>()

const path = computed(() => {
  const icon = icons.find(icon => icon.name === props.name)
  if (!icon) {
    throw new Error(`Icon "${props.name}" is not registered in app/assets/icons.ts`)
  }
  return icon.path
})
</script>

<template>
  <svg
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path :d="path" />
  </svg>
</template>
