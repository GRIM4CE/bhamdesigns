<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store, route }) {
    console.log(route)
    await store.dispatch('fetchGallery', route.params.title)
  },
  computed: {
    ...mapGetters({ gallery: 'gallery' }),
  },
}
</script>

<template>
  <section v-if="gallery" class="gallery-section">
    <h1 class="gallery-title">{{ gallery.title }}</h1>
    <div class="gallery-container">
      <img
        v-for="(image, index) in gallery.images"
        :key="index"
        class="gallery-img"
        :src="'/img/galleries' + image"
      />
    </div>
    <div class="gallery-description-container">
      <p class="gallery-description">{{ gallery.description }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.gallery-section {
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 106px);
}

.gallery-title {
  margin: 3rem 3rem 0;
}

.gallery-container {
  display: flex;
  align-items: center;
  height: 60%;
  margin: 1rem 3rem;
  overflow: auto;
}

.gallery-img {
  display: inline-block;
  max-height: 100%;
  margin: 0 1rem;
}

.gallery-description-container {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: $primary200;
}

.gallery-description {
  margin: 1rem 1.5rem;
  color: $white;
  font-size: 16px;
}
</style>
