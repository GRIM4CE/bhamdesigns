<script setup lang="ts">
import { getSortedProjects } from '~~/shared/data/projects'

const title = 'Jon Leibham | Web Engineer'
const description = 'Jon Leibham is a frontend developer working primarily with TypeScript, Vue, and Node.'

useSeo({ title, description, image: '/headshot.jpeg' })

// Roughly the first two rows at the widest breakpoint — enough to cover the fold
// without eagerly fetching the whole grid.
const EAGER_CARDS = 10

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
  <div>
    <!-- The design carries no visible page heading, but the document still needs
         exactly one h1 for screen readers and crawlers. -->
    <h1 class="visually-hidden">
      Jon Leibham — Web Engineer
    </h1>

    <section
      class="project-section"
      aria-label="Selected projects"
    >
      <ProjectCard
        v-for="(project, index) in filteredProjects"
        :key="project.id"
        :project="project"
        :eager="index < EAGER_CARDS"
        :priority="index === 0"
      />
    </section>
  </div>
</template>
