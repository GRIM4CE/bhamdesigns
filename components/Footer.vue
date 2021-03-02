<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<template lang="html">
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

<style lang="scss" scoped>
.footer-clearfix {
  height: $footer-height;
}

.footer {
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: $footer-height;
  background-color: $white;
}

.copyright {
  color: $black;
}

.copyright-brand {
  color: $primary200;
}
</style>
