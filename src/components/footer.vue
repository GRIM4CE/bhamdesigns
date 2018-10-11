<template lang="html">
  <footer>
    <div class="footer-clearfix"></div>
    <div class="footer">
      <h6 class="copyright">© {{currentYear}} | <span class="copyright-brand" @click="route(null)">Bham Design</span> | All Rights Reserved</h6>
    </div>
  </footer>
</template>

<script>
import store from '@/store'

export default {
  computed: {
    currentYear() {
      return (new Date()).getFullYear()
    },
  },
  methods: {
    route(category) {
      store.commit('setCategory', category)
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../sass/variables.scss';

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
  background-color: rgba($white, .4);
}

.copyright {
  color: rgba($primary400, .5);
}

.copyright-brand {
  color: $primary400;
  cursor: pointer;

  &:hover {
    color: $secondary400;
  }
}
</style>
