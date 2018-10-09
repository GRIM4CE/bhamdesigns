<template>
<section>
  <bio></bio>
  <div class='card-container'>
    <projectcard v-for='(project, index) in projects' :key='index' :project='project'></projectcard>
  </div>
</section>
</template>

<script type='text/javascript'>
import store from '@/store'

import projectcard from '../components/project-card.vue'
import bio from '../components/bio.vue'

export default {
  components: {
    projectcard,
    bio,
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    projects() {
       return store.getters.activeProjects
    },
  },
  created() {
    this.loading = true
    store.dispatch('fetchProjects')
      .then(() => { this.loading = false })
  },
}
</script>

<style lang='scss' scoped>
@import '../sass/variables.scss';
@import './home.scss';
</style>
