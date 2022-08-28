<script setup lang="ts">
import { useRouter } from 'vue-router'

import type { Project } from "~~/types/project";
import type { PropType } from 'vue';

const router = useRouter()

const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    default: () => ({}),
  },
})

const formatDate = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp * 1000)
  return date.toLocaleDateString(undefined, {
    month: 'long',
    year: 'numeric',
  })
}

const thumbnail = computed(() => {
  const { fileType, path } = props.project.image
  return `https://bhamdesigns.imgix.net/thumbnails/${fileType}/${path}.${fileType}`
})

const year = computed(() => {
  const endDate = props.project.endDate ? formatDate(props.project.endDate) : 'Present'
  if(!props.project.startDate) return endDate
  return `${formatDate(props.project.startDate)} – ${endDate}`
})


</script>

<template>
  <template v-if="project.slug && project.slug.path">
    <a
      class="card clickable"
      :tabindex="0"
      :href="`gallery/${project.slug.path}`"
    >
      <div class="card-opacity">
        <span class="card-title">{{ project.title }}</span>
        <span class="card-year">{{ year }}</span>
      </div>
      <DImg
        class="card-image"
        width="227.2"
        height="227.2"
        :src="thumbnail"
        :alt="project.title"
      />
    </a>
  </template>


  <template v-else>
    <div
      class="card"
      :tabindex="-1"
    >
      <div class="card-opacity">
        <span class="card-title">{{ project.title }}</span>
        <span class="card-year">{{ year }}</span>
      </div>
      <DImg
        class="card-image"
        width="227.2"
        height="227.2"
        :src="thumbnail"
        :alt="project.title"
      />
    </div>
  </template>
</template>