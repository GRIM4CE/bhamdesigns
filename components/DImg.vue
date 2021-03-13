<script>
export default {
  data() {
    return {
      src: '',
    }
  },
  mounted() {
    this.src = this.$attrs.src
  },
  methods: {
    updateImgSrc() {
      if (!this.src || !this.$attrs.fallback) return
      const tempSrc = this.src
      const extensionToReplace = tempSrc.substr(tempSrc.lastIndexOf('.') + 1)
      this.src = tempSrc.replaceAll(extensionToReplace, this.$attrs.fallback)
    },
  },
}
</script>

<template>
  <img :src="src" :onerror="updateImgSrc()" loading="lazy" />
</template>
