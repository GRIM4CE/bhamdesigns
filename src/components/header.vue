<template>
<header>
  <div class="header-clearfix"></div>
  <div class="header">
    <a class="header-link" @click="route(null)">
      <img class="header-logo" src="../assets/logo.svg" alt="Bham Designs">
    </a>
    <nav class="header-nav">
      <a class="header-link" @click="route('design')">Design</a>
      <a class="header-link" @click="route('web-design')">UX/UI</a>
      <a class="header-link" @click="route('photography')">Photography</a>
      <a class="header-link" @click="route('fine-art')">Fine-Art</a>
    </nav>
  </div>
</header>
</template>

<script type = "text/javascript" >
import store from '@/store'

export default {
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
@import './header.scss';
</style>
