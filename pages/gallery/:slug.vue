<script>
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
      return {}
    }
  },
  head() {
    if (!this.hasGallery) return
    const title = `Jon Leibham | Web Engineer | ${this.gallery.project.title}`
    return generateHead({
      title,
      description: this.gallery.description,
      image: this.galleryImages[0],
      noIndex: this.gallery.project.slug.noIndex,
    })
  },
  computed: {
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
        <h1 class="gallery-title">{{ gallery.project.title }}</h1>
        <p class="gallery-description">{{ gallery.description }}</p>
      </div>
    </aside>

    <div class="gallery-container">
      <DImg
        v-for="(image, index) in galleryImages"
        :key="index"
        loading="lazy"
        class="gallery-img"
        :src="image"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.gallery-section {
  display: grid;

  @include tablet {
    grid-template-columns: calc(100% - 500px) 500px;
    margin: 3rem 2rem;
  }
}

.gallery-aside {
  margin: 0 0 2rem;
  padding: 2rem 2rem 1rem;
  background: $primary200;
  color: $white;

  @include tablet {
    grid-row: 1;
    grid-column: 2;
    padding: 0;
    background: transparent;
    color: $black;
  }
}

.gallery-wrapper {
  margin: 0 0 2rem;

  @include tablet {
    margin: 0 2rem;
    position: fixed;
  }
}

.gallery-title {
  color: $white;
  margin: 0 0 1rem;

  @include tablet {
    color: $black;
  }
}
.gallery-container {
  display: grid;
  justify-content: center;

  @include tablet {
    grid-column: 1;
    grid-row: 1;
  }
}

.gallery-img {
  margin: 0 auto 1rem;
  max-width: 100%;
  max-height: 500px;
}
</style>
