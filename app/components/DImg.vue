<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  alt: string
  /**
   * Optional same-image URL in a universally-supported format (JPEG). When set,
   * `src` is offered as a WebP `<source>` and this is the `<img>` fallback, so
   * browsers without WebP support (older Safari, some in-app webviews) still get
   * a picture instead of a broken image.
   */
  fallbackSrc?: string
  width?: string | number
  height?: string | number
  loading?: 'lazy' | 'eager'
  fetchpriority?: 'high' | 'low' | 'auto'
}>(), {
  fallbackSrc: undefined,
  width: undefined,
  height: undefined,
  loading: 'lazy',
  fetchpriority: 'auto',
})

// Class/style land on the <img>, not the <picture> wrapper, so existing
// image styling keeps targeting the element it always has.
defineOptions({ inheritAttrs: false })
</script>

<template>
  <picture
    v-if="fallbackSrc"
    class="d-img-picture"
  >
    <source
      :srcset="src"
      type="image/webp"
    >
    <img
      v-bind="$attrs"
      :src="fallbackSrc"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      :fetchpriority="fetchpriority"
      decoding="async"
    >
  </picture>
  <img
    v-else
    v-bind="$attrs"
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="loading"
    :fetchpriority="fetchpriority"
    decoding="async"
  >
</template>

<style>
/* The wrapper must not generate its own box, or it would break the layout and
   the auto-margins/aspect-ratio the inner <img> relies on. */
.d-img-picture {
  display: contents;
}
</style>
