<script>
import { generateHead } from "@/assets/js/head.js";

export default {
  async asyncData({ app }) {
    try {
      // const variables = {}
      // if (route.query.sort) {
      //   const filter = route.query.sort.toUpperCase().replace('-', '')
      //   variables.filter = filter
      // }
      const res = await app.apolloProvider.defaultClient.query({
        query: GET_PROJECTS,
        // variables,
      });
      const projects = res.data.projects || [];
      return { projects };
    } catch (e) {
      return [];
    }
  },
  data() {
    return {
      projects: [],
    };
  },
  head() {
    const title = "Jon Leibham | Web Engineer";
    const description = `Jon Leibham is a Milwaukee-based Frontend Architect.
    He primarily works with Node, Vue, Nuxt, Vuex, Apollo,
    JS(ES6) Typescript, and SCSS.`;
    return generateHead({ title, description, image: "/img/headshot.jpg" });
  },
  computed: {
    filteredProjects() {
      if (this.$route.query.sort && this.projects.length !== 0) {
        const filter = this.$route.query.sort.replace("-", "").toUpperCase();
        return this.projects.filter(
          (project) => project.category && project.category.includes(filter)
        );
      }
      return this.projects;
    },
  },
};
</script>

<template>
  <section>
    <Bio />
    <div v-if="filteredProjects" class="card-container">
      <ProjectCard
        v-for="(project, index) in filteredProjects"
        :key="index"
        :project="project"
      ></ProjectCard>
    </div>
  </section>
</template>

<style scoped>
.card-container {
  display: grid;
  max-width: 1200px;
  justify-content: center;
  margin: 1rem auto;
  padding: 0 var(--gutter) / 2;
  grid-template-columns: repeat(2, minmax(0, 250px));
  grid-row-gap: var(--gutter) / 2;
  grid-column-gap: var(--gutter) / 2;
}

@media all and (min-width: 37.5rem) {
  .card-container {
    grid-template-columns: repeat(3, minmax(0, 250px));
    grid-row-gap: var(--gutter);
    grid-column-gap: var(--gutter);
    padding: var(--gutter) / 2 var(--gutter);
  }
}

@media all and (min-width: 46.875rem) {
  .card-container {
    grid-template-columns: repeat(4, minmax(0, 250px));
    grid-row-gap: var(--gutter);
    grid-column-gap: var(--gutter);
  }
}

@media all and (min-width: 62.5rem) {
  .card-container {
    padding: var(--gutter) * 2 var(--gutter) var(--gutter) * 2 var(--gutter) * 4;
    grid-template-columns: repeat(5, minmax(0, 250px));
  }
}
</style>
