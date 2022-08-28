<script setup lang="ts">
import icons from '~/assets/icons/index.js'

import { useAttrs } from 'vue';

const attrs = useAttrs()

const path = computed(() => {
  if (!icons[attrs.name])
    throw new Error(
      `The icon: "${attrs.name}" is either unregistered or does not exist in the "~/assets/icons/" directory`
    )
  return icons[attrs.name].path
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