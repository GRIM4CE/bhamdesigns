<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

import { generateHead } from "~~/assets/head";
import { fetchGallery } from "~~/assets/data";

import type { Gallery } from "~~/types/project";

const route = useRoute()
const router = useRouter()
const gallery = ref<Gallery>()

try {
  if(route.params.slug && !Array.isArray(route.params.slug)) {
    gallery.value = fetchGallery(route.params.slug)

  useHead({ 
      ...generateHead({ 
          title: `Jon Leibham | Web Engineer | ${gallery.value.title}`,
          description: gallery.value.description,
          image: gallery.value.images[0],
          noIndex: gallery.value.noIndex  
      })
    })
  }
} catch(e) {
  router.push('/404')
}

const galleryImages = computed(() => {
  const { count, path, fileType } = gallery.value.images;
  return [...Array(count)].map(
    (_, i) => ({
      path: `https://bhamdesigns.imgix.net/galleries/${path}/${path}-${i}${fileType}?auto=compress`,
      alt: `${gallery.value.title} – Image ${i + 1} of ${count}`
    })
  );
})
</script>

<template>
  <section v-if="gallery" class="gallery-section">
    <aside class="gallery-aside">
      <div class="gallery-wrapper">
        <h1 class="gallery-title">{{ gallery.title }}</h1>
        <p class="gallery-description">{{ gallery.description }}</p>
      </div>
    </aside>

    <div class="gallery-container">
      <DImg
        v-for="image in galleryImages"
        :key="image.alt"
        :alt="image.alt"
        class="gallery-img"
        :src="image.path"
      />
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  display: grid;
}

.gallery-aside {
  margin: 0 0 2rem;
  padding: 2rem 2rem 1rem;
  background: var(--primary200);
  color: var(--white);
}

.gallery-wrapper {
  margin: 0 0 2rem;
}

.gallery-title {
  color: var(--white);
  margin: 0 0 1rem;
}

.gallery-container {
  display: grid;
  justify-content: center;
}

.gallery-img {
  margin: 0 auto 1rem;
  max-width: 100%;
  max-height: 500px;
}

@media all and (min-width: 37.5rem) {
  .gallery-section {
    grid-template-columns: calc(100% - 500px) 500px;
    margin: 3rem 2rem;
  }

  .gallery-aside {
    grid-row: 1;
    grid-column: 2;
    padding: 0;
    background: transparent;
    color: var(--black);
  }

  .gallery-wrapper {
    margin: 0 2rem;
    position: fixed;
  }

  .gallery-title {
    color: var(--black);
  }

  .gallery-container {
    grid-column: 1;
    grid-row: 1;
  }
}
</style>
