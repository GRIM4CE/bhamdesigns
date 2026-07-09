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
  <section class="error-section">
    <h1 class="error-code">
      {{ error.statusCode }}
    </h1>
    <p class="error-message">
      {{ isNotFound ? 'This page could not be found.' : 'Something went wrong.' }}
    </p>
    <button
      class="error-home"
      type="button"
      @click="clearError({ redirect: '/' })"
    >
      Back to home
    </button>
  </section>
</template>

<style scoped>
/* Colours mirror the brand palette in app/assets/styles/variables.scss */
.error-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 60vh;
  padding: 2rem 1rem;
  text-align: center;
}

.error-code {
  font-size: 4rem;
}

.error-home {
  padding: 0.6rem 1.25rem;
  border: none;
  border-radius: 3px;
  color: #fff;
  background-color: #352d38;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  cursor: pointer;
}

.error-home:hover {
  background-color: #584c5c;
}
</style>
