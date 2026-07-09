<script setup lang="ts">
withDefaults(defineProps<{
  statusCode?: number | string
  message?: string
}>(), {
  statusCode: 404,
  message: 'This page could not be found.',
})
</script>

<template>
  <section class="error-section">
    <h1 class="error-code">
      {{ statusCode }}
    </h1>
    <p class="error-message">
      {{ message }}
    </p>
    <slot />
  </section>
</template>

<style scoped>
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
</style>
