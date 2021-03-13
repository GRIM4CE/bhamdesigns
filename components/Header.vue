<script>
export default {
  methods: {
    route(sort) {
      const query = sort ? { sort } : {}
      this.$router.push({
        path: '/',
        query,
      })
    },
  },
}
</script>

<template>
  <header>
    <div class="header-clearfix"></div>
    <div class="header">
      <a
        class="header-link"
        tabindex="0"
        @click="route(null)"
        @keyup.enter="route(null)"
      >
        <img class="header-logo" src="/logo/logo.svg" alt="Bham Designs" />
      </a>
      <nav class="header-nav">
        <ul class="header-ul">
          <li class="header-li">
            <a
              class="header-link"
              tabindex="0"
              @keyup.enter="route('design')"
              @click="route('design')"
              >Design</a
            >
          </li>
          <li class="header-li">
            <a
              class="header-link"
              tabindex="0"
              @keyup.enter="route('web-design')"
              @click="route('web-design')"
              >UX/UI</a
            >
          </li>
          <li class="header-li">
            <a
              class="header-link"
              tabindex="0"
              @keyup.enter="route('photography')"
              @click="route('photography')"
              >Photography</a
            >
          </li>
          <li class="header-li">
            <a
              class="header-link"
              tabindex="0"
              @keyup.enter="route('fine-art')"
              @click="route('fine-art')"
              >Fine-Art</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-clearfix {
  height: $header-mobile-height;
}

.header {
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: $header-mobile-height;
  padding: 0 1rem;
  background-color: $primary400;
  z-index: 2;
  box-shadow: 0 2px 2px rgba($black, 0.6);
}

.header-logo {
  width: 190px;
}

.header-nav {
  display: none;
  margin-left: auto;
}

.header-ul {
  display: flex;
  padding: 0;
}

.header-li {
  padding-left: 1rem;
}

.header-link {
  display: inline;
  color: $white;
  font-family: $head-font;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: $secondary400;
  }
}

@media all and (min-width: 37.5rem) {
  .header-clearfix {
    height: $header-height;
  }

  .header-logo {
    width: 100%;
    max-width: 200px;
  }

  .header {
    display: grid;
    height: $header-height;
    padding: 0 2rem;
    grid-template-columns: minmax(0, 200px) minmax(0, 1800px);
  }

  .header-nav {
    display: flex;
  }
}
</style>
