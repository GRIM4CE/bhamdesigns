<template>
  <div id="app">
    <appHeader/>
    <router-view/>
    <appFooter/>
  </div>
</template>

<script type='text/javascript'>
import appHeader from './components/header.vue'
import appFooter from './components/footer.vue'

export default {
  components: {
    appHeader,
    appFooter,
  },
}
</script>

<style lang="scss">
  @import './sass/variables.scss';
  @import './sass/base.scss';
</style>
