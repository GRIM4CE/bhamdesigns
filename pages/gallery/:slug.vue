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
    <article class="gallery-text">
      <h1 class="gallery-title">{{ gallery.title }}</h1>
      <p class="gallery-description">{{ gallery.description }}</p>
    </article>

    <div class="gallery-image-container">
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
