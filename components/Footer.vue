<script setup lang="ts">
const currentYear = computed(()  => {
  return new Date().getFullYear()
})
</script>

<template>
  <footer>
    <div class="footer-clearfix"></div>
    <div class="footer">
      <h6 class="copyright">
        © {{ currentYear }} | <span class="copyright-brand">Bham Design</span> |
        All Rights Reserved
      </h6>
    </div>
  </footer>
</template>