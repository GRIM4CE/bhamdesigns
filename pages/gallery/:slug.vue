<script>
import { mapGetters } from 'vuex'
import { generateHead } from '@/assets/js/head.js'
import { GET_GALLERY } from '@/assets/js/graphql.js'

export default {
  async asyncData({ app, route }) {
    try {
      const res = await app.apolloProvider.defaultClient.query({
        query: GET_GALLERY,
        variables: { slug: route.params.slug },
      })
      const gallery = res.data.gallery
      return { gallery }
    } catch (e) {
      console.log(e)
      return {}
    }
  },
  head() {
    if (!this.hasGallery) return
    const title = `Jon Leibham | Frontend Architect | ${this.gallery.title}`
    return generateHead({
      title,
      description: this.gallery.description,
      image: this.galleryImages[0],
    })
  },
  computed: {
    ...mapGetters({ gallery: 'gallery' }),
    hasGallery() {
      return Object.keys(this.gallery).length !== 0
    },
    galleryImages() {
      const { count, path, fileType } = this.gallery.images
      return [...Array(count)].map(
        (_, i) => '/img/galleries' + path + i + fileType
      )
    },
  },
}
</script>

<template>
  <section v-if="hasGallery" class="gallery-section">
    <aside class="gallery-aside">
      <div class="gallery-wrapper">
        <h1 class="gallery-title">{{ gallery.title }}</h1>
        <p class="gallery-description">{{ gallery.description }}</p>
      </div>
    </aside>

    <div class="gallery-container">
      <img
        v-for="(image, index) in galleryImages"
        :key="index"
        load="lazy"
        class="gallery-img"
        :src="image"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.gallery-section {
  display: grid;
  grid-template-columns: calc(100% - 500px) 500px;
  margin: 3rem 2rem;
}

.gallery-aside {
  grid-row: 1;
  grid-column: 2;
}

.gallery-title {
  margin: 0 0 1rem;
}

.gallery-wrapper {
  position: fixed;
  margin: 0 2rem;
}

.gallery-container {
  display: grid;
  justify-content: center;
  grid-column: 1;
  grid-row: 1;
}

.gallery-img {
  margin: 0 auto 1rem;
  max-width: 100%;
  max-height: 500px;
}
</style>
