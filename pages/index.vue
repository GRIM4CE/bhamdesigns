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
  if (route?.query?.sort && !Array.isArray(route.query.sort) && projects.value.length !== 0) {
    return projects.value.filter(
      (project) => project.category && project.category.includes(route.query.sort)
    );
  }
  
  return projects.value;
})
</script>

<template>
  <section v-if="filteredProjects" class="project-section">
    <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project"/> 
  </section>
</template>