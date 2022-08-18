<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      imageSrc: '',
    }
  },
  computed: {
    thumbnail() {
      const { fileType, path } = this.project.image
      return `/img/thumbnails/${fileType}/${path}.${fileType}`
    },
    year() {
      const date = new Date(this.project.date * 1000)
      return date.toLocaleDateString(undefined, {
        month: 'long',
        year: 'numeric',
      })
    },
  },
  methods: {
    route(slug) {
      if (!slug) return
      this.$router.push({
        path: `gallery/${slug.path}`,
        params: { slug: slug.path },
      })
    },
  },
}
</script>

<template>
  <a
    class="card"
    :class="project.slug ? 'clickable' : ''"
    :tabindex="project.slug ? 0 : -1"
    @click="route(project.slug)"
  >
    <div class="card-opacity">
      <span class="card-title">{{ project.title }}</span>
      <span class="card-year">{{ year }}</span>
    </div>
    <DImg
      class="card-image"
      :fallback="project.image.fallbackFileType"
      :src="thumbnail"
      :alt="project.title"
    />
  </a>
</template>

<style scoped>
.card {
  background-color: var(--primary200);
  display: block;
  position: relative;
  max-width: 250px;
  height: 0;
  padding-bottom: 100%;
  border-radius: 3px;
  overflow: hidden;
}

.card.clickable {
  cursor: pointer;
}

.card-opacity {
  display: none;
  position: absolute;
  width: 100%;
  max-width: 250px;
  height: 100%;
  max-height: 250px;
  padding: 1rem;
  transition: opacity 0.4s;
  background-color: var(--black-90);
  opacity: 0;
}

.card-image {
  width: 100%;
  max-width: 250px;
  max-height: 250px;
  opacity: 1;
  transition: 0.2s opacity;
}

.card-image[data-src] {
  opacity: 0;
}

.card-title {
  display: block;
  color: var(--white);
  font-size: 18px;
  line-height: 1.4;
}

.card-year {
  color: var(--secondary400);
  font-size: 16px;
}

@media all and (min-width: 37.5rem) {
  .card-opacity {
    display: grid;
    align-content: flex-start;
    grid-template-columns: 1fr;
  }

  .card {
    transition: transform 0.4s ease-in, box-shadow 0.4s ease-in;
    box-shadow: 0 2px 2px var(--black-40);
  }

  .card:hover {
    transform: scale(1.02) translateY(-3px);
    box-shadow: 0 3px 3px 1px var(--black-20);
  }

  .card:hover .card-opacity {
    transition: opacity 0.4s ease-in;
    opacity: 1;
  }
}
</style>
