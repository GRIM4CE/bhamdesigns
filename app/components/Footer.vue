<script setup lang="ts">
const currentYear = ref<number | null>(null)

onMounted(() => {
  currentYear.value = new Date().getFullYear()
})
</script>

<template>
  <footer class="footer">
    <span class="copyright">
      <template v-if="currentYear">©&nbsp;{{ currentYear }}&nbsp;| </template>Bham Designs
    </span>
  </footer>
</template>
