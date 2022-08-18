<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const menu = [{
  slug: 'development',
  name: 'Development'
},
{
  slug: 'uxui',
  name: 'UX/UI'
},
{
  slug: 'design',
  name: 'Design'
},
{
  slug: 'photography',
  name: 'Photography'
},
{
  slug: 'art',
  name: 'Fine Art'
}]

const routeSort = (sort) => {
  const query = sort ? { sort } : {};
  router.push({
    path: "/",
    query,
  })
};
</script>

<template>
  <header>
    <div class="header-clearfix"></div>
    <div class="header">
      <a
        class="header-link"
        tabindex="0"
        @click="routeSort(null)"
        @keyup.enter="routeSort(null)"
      >
        <img class="header-logo" src="/logo/logo.svg" alt="Bham Designs" />
      </a>
      <nav class="header-nav">
        <ul class="header-ul">
          <li class="header-li" v-for="item in menu" :key="item.slug">
            <a
              class="header-link"
              tabindex="0"
              @keyup.enter="routeSort(item.slug)"
              @click="routeSort(item.slug)"
              >{{item.name}}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header-clearfix {
  height: var(--header-mobile-height);
}

.header {
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: var(--header-mobile-height);
  padding: 0 1rem;
  background-color: var(--primary400);
  z-index: 2;
  box-shadow: 0 2px 2px var(--black-60);
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
  color: var(--white);
  font-family: var(--head-font);
  text-decoration: none;
  cursor: pointer;
}

.header-link:hover {
  color: var(--secondary400);
}

@media all and (min-width: 37.5rem) {
  .header-clearfix {
    height: var(--header-height);
  }

  .header-logo {
    width: 100%;
    max-width: 200px;
  }

  .header {
    display: grid;
    height: var(--header-height);
    padding: 0 2rem;
    grid-template-columns: minmax(0, 200px) minmax(0, 1800px);
  }

  .header-nav {
    display: flex;
  }
}
</style>
