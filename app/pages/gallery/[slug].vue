<script setup lang="ts">
import { getGallery } from '~~/shared/data/galleries'
import { getImageDimensions } from '~~/shared/data/imageDimensions'

// Give each gallery its own component instance so setup re-runs on route change.
definePageMeta({
  key: route => route.path,
})

const route = useRoute()
const gallery = getGallery(String(route.params.slug))

if (!gallery) {
  throw createError({ statusCode: 404, statusMessage: 'Gallery not found', fatal: true })
}

const { count, path } = gallery.images
// WebP derivatives are generated and committed by `npm run images:build`; the
// original JPEGs stay in the repo as the source of truth for regeneration.
const images = Array.from({ length: count }, (_, index) => {
  const src = `/galleries/${path}/${path}-${index}.webp`
  return {
    src,
    alt: `${gallery.title} – Image ${index + 1} of ${count}`,
    // Intrinsic size reserves the box before the bytes land, which keeps CLS at zero.
    ...getImageDimensions(src),
  }
})

useSeo({
  title: `Jon Leibham | Web Engineer | ${gallery.title}`,
  description: gallery.description,
  // Social scrapers still handle JPEG more reliably than WebP, so share the original.
  image: `/galleries/${path}/${path}-0${gallery.images.fileType}`,
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
        v-for="(image, index) in images"
        :key="image.alt"
        class="gallery-img"
        :src="image.src"
        :alt="image.alt"
        :width="image.width"
        :height="image.height"
        :loading="index === 0 ? 'eager' : 'lazy'"
        :fetchpriority="index === 0 ? 'high' : 'auto'"
      />
    </div>
  </section>
</template>
