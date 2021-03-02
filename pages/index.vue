<script>
import { mapGetters } from 'vuex'
import { generateHead } from '@/assets/js/head.js'

export default {
  async asyncData({ store }) {
    await store.dispatch('fetchProjects')
  },
  head() {
    const title = 'Jon Leibham | Frontend Architect'
    const description = `Jon Leibham is a Milwauke-based Frontend Architect.
    He primarily works with Node, Vue, Nuxt, Vuex, Apollo,
    JS(ES6) Typescript, and SCSS.`
    return generateHead({ title, description, image: '/img/headshot.jpg' })
  },
  computed: {
    ...mapGetters({ projects: 'projects' }),
  },
}
</script>

<template>
  <section>
    <Bio />
    <div v-if="projects" class="card-container">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      ></ProjectCard>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card-container {
  display: grid;
  padding: 0 $gutter / 2;
  grid-template-columns: repeat(3, minmax(0, 250px));
  grid-row-gap: $gutter / 2;
  grid-column-gap: $gutter / 2;
}

@media all and (min-width: 37.5rem) {
  .card-container {
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
