<script>
import icons from '~/assets/icons/index.js'

export default {
  computed: {
    path() {
      if (!icons[this.$attrs.name])
        throw new Error(
          `The icon: "${this.$attrs.name}" is either unregistered or does not exist in the "~/assets/icons/" directory`
        )
      return icons[this.$attrs.name].path
    },
  },
}
</script>

<template>
  <svg
    class="svg-container"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path :d="path" />
  </svg>
</template>

<style scoped>
.svg-container {
  display: inline-block;
  width: 1em;
  height: 1em;
  overflow: visible;
  font-size: 24px;
  vertical-align: -0.125em;
  fill: currentColor;
}
</style>
