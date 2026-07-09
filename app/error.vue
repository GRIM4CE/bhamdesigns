<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const isNotFound = computed(() => props.error.statusCode === 404)

useSeo({
  title: isNotFound.value ? 'Page not found | Jon Leibham' : 'Error | Jon Leibham',
  description: 'The page you were looking for could not be found.',
  noIndex: true,
})
</script>

<template>
  <ErrorContent
    :status-code="error.statusCode"
    :message="isNotFound ? 'This page could not be found.' : 'Something went wrong.'"
  >
    <button
      class="error-home"
      type="button"
      @click="clearError({ redirect: '/' })"
    >
      Back to home
    </button>
  </ErrorContent>
</template>
