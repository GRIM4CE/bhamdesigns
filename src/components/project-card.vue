<template>
<div class="card" @click="route(project.title)">
  <div class="card-opacity">
    <span class="card-title">{{project.title}}</span>
    <span class="card-year">{{project.year}}</span>
  </div>
  <img class="card-image" :data-src="thumbnail" :alt="project.title">
</div>
</template>

<script type = "text/javascript" >
import store from '@/store'

export default {
  props: ['project'],
  methods: {
    route(title) {
      title = title.toLowerCase().split(/\s+/).join('-')
      this.$router.push({
        name: 'gallery',
        params: {
          gallery: title
        }
      })
    },
  },
  computed: {
    thumbnail() {
      return 'static/thumbnails/' + this.project.thumbnail
    },
  },
  mounted() {
    const img = document.querySelector(`img[alt='${this.project.title}']`)
    img.setAttribute('src', img.getAttribute('data-src'))
    img.onload = function() {
      img.removeAttribute('data-src')
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../sass/variables.scss';
@import './project-card.scss';
</style>
