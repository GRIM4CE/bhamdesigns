<script setup lang="ts">
const menu = [
  { slug: 'development', name: 'Development' },
  { slug: 'uxui', name: 'UX/UI' },
  { slug: 'design', name: 'Design' },
  { slug: 'photography', name: 'Photography' },
  { slug: 'art', name: 'Fine Art' },
]
</script>

<template>
  <header>
    <div class="header-clearfix" />
    <div class="header">
      <NuxtLink
        class="header-link"
        to="/"
      >
        <DImg
          class="header-logo"
          src="/logo/logo.svg"
          alt="Bham Designs"
          :width="200"
          :height="33"
        />
      </NuxtLink>
      <nav class="header-nav">
        <ul class="header-ul">
          <li
            v-for="item in menu"
            :key="item.slug"
            class="header-li"
          >
            <NuxtLink
              class="header-link"
              :to="{ path: '/', query: { sort: item.slug } }"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
