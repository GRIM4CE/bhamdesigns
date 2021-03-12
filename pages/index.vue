<script>
import { generateHead } from '@/assets/js/head.js'
import { GET_PROJECTS } from '@/assets/js/graphql.js'

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
      })
      const projects = res.data.projects || []
      return { projects }
    } catch (e) {
      return []
    }
  },
  data() {
    return {
      projects: [],
    }
  },
  head() {
    const title = 'Jon Leibham | Web Engineer'
    const description = `Jon Leibham is a Milwaukee-based Frontend Architect.
    He primarily works with Node, Vue, Nuxt, Vuex, Apollo,
    JS(ES6) Typescript, and SCSS.`
    return generateHead({ title, description, image: '/img/headshot.jpg' })
  },
  computed: {
    filteredProjects() {
      if (this.$route.query.sort && this.projects.length !== 0) {
        const filter = this.$route.query.sort.replace('-', '').toUpperCase()
        return this.projects.filter(
          (project) => project.category && project.category.includes(filter)
        )
      }
      return this.projects
    },
  },
}
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

<style lang="scss" scoped>
.card-container {
  display: grid;
  margin-top: 1rem;
  padding: 0 $gutter / 2;
  grid-template-columns: repeat(2, minmax(0, 250px));
  grid-row-gap: $gutter / 2;
  grid-column-gap: $gutter / 2;
}

@media all and (min-width: 37.5rem) {
  .card-container {
    margin-top: 0;
    grid-row-gap: $gutter;
    grid-column-gap: $gutter;
    padding: $gutter / 2 $gutter;
  }
}

@media all and (min-width: 46.875rem) {
  .card-container {
    grid-template-columns: repeat(4, minmax(0, 250px));
    grid-row-gap: $gutter;
    grid-column-gap: $gutter;
  }
}

@media all and (min-width: 62.5rem) {
  .card-container {
    padding: $gutter * 2 $gutter $gutter * 2 $gutter * 4;
    grid-template-columns: repeat(5, minmax(0, 250px));
  }
}

@media all and (min-width: 78.125rem) {
  .card-container {
    grid-template-columns: repeat(6, minmax(0, 250px));
  }
}

@media all and (min-width: 93.75rem) {
  .card-container {
    grid-template-columns: repeat(7, minmax(0, 250px));
  }
}

@media all and (min-width: 100rem) {
  .card-container {
    grid-template-columns: repeat(8, minmax(0, 200px));
  }
}
</style>
