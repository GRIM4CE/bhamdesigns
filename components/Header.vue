<script>
export default {
  methods: {
    route(category) {
      this.$store.commit('setCategory', category)
      this.$router.push('/')
    },
  },
}
</script>

<template>
  <header>
    <div class="header-clearfix"></div>
    <div class="header">
      <a class="header-link" @click="route(null)">
        <img class="header-logo" src="/logo/logo.svg" alt="Bham Designs" />
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

<style lang="scss" scoped>
.header-clearfix {
  height: $header-height;
}

.header {
  display: grid;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: $header-height;
  padding: 0 2rem;
  background-color: $primary400;
  z-index: 2;
  grid-template-columns: 1fr;
  box-shadow: 0 2px 2px rgba($black, 0.6);
}

.header-logo {
  width: 100%;
  max-width: 200px;
}

.header-nav {
  display: none;
  margin-left: auto;
}

.header-link {
  padding-left: 1rem;
  color: $white;
  font-family: $head-font;
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: $secondary400;
  }
}

@media all and (min-width: 37.5rem) {
  .header {
    grid-template-columns: minmax(0, 200px) minmax(0, 1800px);
  }

  .header-nav {
    display: flex;
  }
}
</style>
