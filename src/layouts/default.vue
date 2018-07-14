<template lang="pug">
.app
  AppHeader
  nuxt
  AppFooter
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
.app {
  position: relative;
  > * {
    position: relative;
    z-index: 2;
  }
  &:before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: $pjcolor-brown-01;
    background-image: url("/cover.svg");
    background-position: center center;
    background-size: cover;
    z-index: 1;
  }
}
</style>
