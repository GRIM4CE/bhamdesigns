<template>
<div class="card" @click="route(project.title)">
  <div class="card-opacity">
    <span class="card-title">{{project.title}}</span>
    <span class="card-year">{{project.year}}</span>
  </div>
  <img class="card-image" :src="thumbnail" :alt="project.title">
</div>
</template>

<script type = "text/javascript" >
import store from '@/store'

export default {
  props: ['project'],
  methods: {
    route(title) {
      title = title.toLowerCase().split(/\s+/).join('-')
      this.$router.push('/gallery/' + title)
    },
  },
  computed: {
    thumbnail() {
      return 'static/thumbnails/' + this.project.thumbnail
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables.scss';
  @import './project-card.scss';
</style>
