<script setup lang="ts">
import { profile, sameAs } from '~~/shared/data/profile'
import { getSortedProjects } from '~~/shared/data/projects'

const title = `${profile.name} | ${profile.jobTitle}`
const description = 'Jon Leibham is a frontend developer working primarily with TypeScript, Vue, and Node.'

useSeo({ title, description, image: '/headshot.jpeg' })

const { public: { siteUrl } } = useRuntimeConfig()

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': profile.name,
      'jobTitle': profile.jobTitle,
      'description': description,
      'url': siteUrl,
      'image': `${siteUrl}/headshot.jpeg`,
      'email': `mailto:${profile.email}`,
      sameAs,
    }),
  }],
})

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
