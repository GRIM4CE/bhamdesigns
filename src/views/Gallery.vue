<template>
<section>
  <h1>{{gallery.title}}</h1>
  <div class="gallery-container">
    <img v-for="(image, index) in gallery.images" :key="index" :src="'../static/galleries' + image" alt="">
  </div>
</section>
</template>

<script type = "text/javascript">
import store from '@/store'

export default {
  computed: {
    gallery() {
       return store.state.gallery
    },
  },
  created() {
    this.loading = true
    store.dispatch('fetchGallery', this.$route.params.id)
      .then(() => { this.loading = false })
  },
}
</script>

<style lang="scss">
</style>
