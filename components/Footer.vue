<script setup lang="ts">
const currentYear = computed(()  => {
  return new Date().getFullYear()
})
</script>

<template>
  <footer class="footer">
    <span class="copyright">© {{ currentYear }} | Bham Designs</span>
  </footer>
</template>