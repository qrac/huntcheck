<template lang="pug">
.app
  header.header
    h1.heading.is-title Hunt Check
  nuxt
  footer.footer
</template>

<style lang="scss" scoped>
.app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header {
  padding: 1.5em 0;
}

.heading.is-title {
  color: #cec8c8;
  font-size: 150%;
  font-family: Oswald, sans-serif;
  text-align: center;
  text-transform: uppercase;
}

.footer {
  padding: 1.5em 0;
}
</style>
