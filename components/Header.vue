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
        href="/"
      >
        <img class="header-logo" src="/logo/logo.svg" alt="Bham Designs" width="200" height="33" />
      </a>
      <nav class="header-nav">
        <ul class="header-ul">
          <li class="header-li" v-for="item in menu" :key="item.slug">
            <a
              class="header-link"
              tabindex="0"
              :href="`/?sort=${item.slug}`">
              {{item.name}}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>