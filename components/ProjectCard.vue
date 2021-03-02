<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    thumbnail() {
      return '/img/thumbnails/' + this.project.thumbnail
    },
  },
  methods: {
    route(title) {
      title = title.toLowerCase().split(/\s+/).join('-')
      this.$router.push({
        path: `${title}`,
        params: { title },
      })
    },
  },
}
</script>

<template>
  <nuxt-link
    class="card"
    tabindex="1"
    :to="`gallery/${project.title.toLowerCase().split(/\s+/).join('-')}`"
  >
    <div class="card-opacity">
      <span class="card-title">{{ project.title }}</span>
      <span class="card-year">{{ project.year }}</span>
    </div>
    <img class="card-image" :src="thumbnail" :alt="project.title" load="lazy" />
  </nuxt-link>
</template>

<style lang="scss" scoped>
.card {
  background-color: $primary200;
  display: block;
  position: relative;
  max-width: 250px;
  height: 0;
  padding-bottom: 100%;
  border-radius: 3px;
  overflow: hidden;
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
  background-color: rgba($primary400, 0.9);
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
  color: $white;
  font-size: 18px;
  line-height: 1.4;
}

.card-year {
  color: $secondary400;
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
    box-shadow: 0 2px 2px rgba($black, 0.4);

    &:hover {
      transform: scale(1.02) translateY(-3px);
      box-shadow: 0 3px 3px 1px rgba($black, 0.2);

      .card-opacity {
        transition: opacity 0.4s ease-in;
        opacity: 1;
      }
    }
  }
}
</style>
