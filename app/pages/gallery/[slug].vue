<script setup lang="ts">
import { getGallery } from '~~/shared/data/galleries'

// Give each gallery its own component instance so setup re-runs on route change.
definePageMeta({
  key: route => route.path,
})

const route = useRoute()
const gallery = getGallery(String(route.params.slug))

if (!gallery) {
  throw createError({ statusCode: 404, statusMessage: 'Gallery not found', fatal: true })
}

const { count, path, fileType } = gallery.images
const images = Array.from({ length: count }, (_, index) => ({
  src: `/galleries/${path}/${path}-${index}${fileType}`,
  alt: `${gallery.title} – Image ${index + 1} of ${count}`,
}))

useSeo({
  title: `Jon Leibham | Web Engineer | ${gallery.title}`,
  description: gallery.description,
  image: images[0]?.src,
  noIndex: gallery.noIndex,
})
</script>

<template>
  <section class="gallery-section">
    <article class="gallery-text">
      <h1 class="gallery-title">
        {{ gallery.title }}
      </h1>
      <p class="gallery-description">
        {{ gallery.description }}
      </p>
    </article>

    <div class="gallery-image-container">
      <DImg
        v-for="image in images"
        :key="image.alt"
        class="gallery-img"
        :src="image.src"
        :alt="image.alt"
      />
    </div>
  </section>
</template>
