<template lang="pug">
footer.footer
  p.texts.is-sm
    //-| Design & Coding:&nbsp;
    //-a.text.is-link-reverse(href="https://twitter.com/qrac" target="_blank" rel="noopener noreferrer") Qrac
    //-| &nbsp;/&nbsp;
    a.text.is-link-reverse(href="https://github.com/qrac/huntcheck" target="_blank" rel="noopener noreferrer") GitHub
    | &nbsp;/&nbsp;
    | License:&nbsp;MIT&nbsp;&nbsp;
    | ©&nbsp;
    a.text.is-link-reverse(href="https://qranoko.jp") QRANOKO
    | &nbsp;2018
</template>

<style lang="scss" scoped>
.footer {
  padding: 1.25em 0;
  color: $light-3;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
}
</style>
