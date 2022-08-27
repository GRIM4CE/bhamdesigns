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

<style scoped lang="css">

.footer-clearfix {
  height: var(--footer-height);
}

.footer {
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: var(--footer-height);
  background-color: var(--white);
}

.copyright {
  font-size: 12px;
  color: var(--black);
}

.copyright-brand {
  color: var(--primary200);
}
</style>
