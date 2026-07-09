<script setup lang="ts">
import type { Project } from '~~/shared/types/project'

const props = withDefaults(defineProps<{
  project: Project
  /** Above-the-fold cards load eagerly; the first is the LCP element. */
  eager?: boolean
  priority?: boolean
}>(), {
  eager: false,
  priority: false,
})

// Fixed locale + UTC so prerendered HTML matches the client render (avoids hydration mismatch).
const formatDate = (unixSeconds: number) =>
  new Date(unixSeconds * 1000).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })

const thumbnail = computed(() => {
  const { fileType, path } = props.project.image
  return `/thumbnails/${fileType}/${path}.${fileType}`
})

// JPEG fallback for browsers without WebP support, so the card still shows an image.
const thumbnailFallback = computed(() => {
  const { fallbackFileType, path } = props.project.image
  if (!fallbackFileType) return undefined
  return `/thumbnails/${fallbackFileType}/${path}.${fallbackFileType}`
})

const year = computed(() => {
  const end = props.project.endDate ? formatDate(props.project.endDate) : 'Present'
  return props.project.startDate ? `${formatDate(props.project.startDate)} – ${end}` : end
})

const to = computed(() =>
  props.project.slug?.path ? `/gallery/${props.project.slug.path}` : undefined,
)
</script>

<template>
  <NuxtLink
    v-if="to"
    class="card clickable"
    :to="to"
  >
    <div class="card-opacity">
      <span class="card-title">{{ project.title }}</span>
      <span class="card-year">{{ year }}</span>
    </div>
    <DImg
      class="card-image"
      :width="227"
      :height="227"
      :src="thumbnail"
      :fallback-src="thumbnailFallback"
      :alt="project.title"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : 'auto'"
    />
  </NuxtLink>

  <div
    v-else
    class="card"
  >
    <div class="card-opacity">
      <span class="card-title">{{ project.title }}</span>
      <span class="card-year">{{ year }}</span>
    </div>
    <DImg
      class="card-image"
      :width="227"
      :height="227"
      :src="thumbnail"
      :fallback-src="thumbnailFallback"
      :alt="project.title"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : 'auto'"
    />
  </div>
</template>
