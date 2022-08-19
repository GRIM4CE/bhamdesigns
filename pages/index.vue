<script setup lang="ts">
import { useRoute } from 'vue-router'
import { generateHead } from "~~/assets/head";
import { fetchProjects } from "~~/assets/data";
import type { Project } from "~~/types/project";

const title = "Jon Leibham | Web Engineer";
const description = `Jon Leibham is a Frontend Developer.
  He primarily works with Typescript, Vue, and Node.`;

useHead({ 
  ...generateHead({ title, description, image: "/img/headshot.jpg" })
})

const route = useRoute()

const projects = ref<Project[]>([]) 
projects.value = await fetchProjects()
const filteredProjects = computed(() => {
  if (route.query.sort && !Array.isArray(route.query.sort) && projects.value.length !== 0) {
    return projects.value.filter(
      (project) => project.category && project.category.includes(route.query.sort)
    );
  }
  
  return projects.value;
})
</script>

<template>
  <section>
    <Bio />
    <main v-if="filteredProjects" class="card-container">
      <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project"/> 
    </main>
  </section>
</template>

<style scoped>
.card-container {
  display: grid;
  max-width: 1200px;
  justify-content: center;
  margin: 1rem auto;
  padding: 0 calc(var(--gutter) / 2);
  grid-template-columns: repeat(2, minmax(0, 250px));
  row-gap: calc(var(--gutter) / 2);
  column-gap: calc(var(--gutter) / 2);
}

@media all and (min-width: 37.5rem) {
  .card-container {
    grid-template-columns: repeat(3, minmax(0, 250px));
    grid-row-gap: var(--gutter);
    column-gap: var(--gutter);
    padding: calc(var(--gutter) / 2) var(--gutter);
  }
}

@media all and (min-width: 46.875rem) {
  .card-container {
    grid-template-columns: repeat(4, minmax(0, 250px));
    grid-row-gap: var(--gutter);
    column-gap: var(--gutter);
  }
}

@media all and (min-width: 62.5rem) {
  .card-container {
    padding: calc(var(--gutter) * 2) var(--gutter) calc(var(--gutter) * 2) calc(var(--gutter) * 4);
    grid-template-columns: repeat(5, minmax(0, 250px));
  }
}
</style>
