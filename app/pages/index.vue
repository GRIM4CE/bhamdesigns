<script setup lang="ts">
import { getSortedProjects } from '~~/shared/data/projects'

const title = 'Jon Leibham | Web Engineer'
const description = 'Jon Leibham is a frontend developer working primarily with TypeScript, Vue, and Node.'

useSeo({ title, description, image: '/headshot.jpeg' })

const route = useRoute()
const projects = getSortedProjects()

const filteredProjects = computed(() => {
  const { sort } = route.query
  if (typeof sort === 'string' && sort) {
    return projects.filter(project => project.category?.includes(sort))
  }
  return projects
})
</script>

<template>
  <section class="project-section">
    <ProjectCard
      v-for="project in filteredProjects"
      :key="project.id"
      :project="project"
    />
  </section>
</template>
