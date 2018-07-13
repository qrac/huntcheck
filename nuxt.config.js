module.exports = {
  /*generate: {
  //  dir: "docs",
  //  minify: false
  },*/
  srcDir: "src/",
  modules: [
    ["@nuxtjs/google-analytics", { id: "UA-40305123-20" }],
    ["nuxt-sass-resources-loader", ["./src/assets/css/_variable.scss"]]
  ],
  css: ["~/assets/css/style.scss"],
  head: {
    title: "ハンティングチェックリスト",
    titleTemplate: "Hunt Check - %s",
    htmlAttrs: {
      lang: "ja",
      prefix: "og: http://ogp.me/ns#"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      },
      {
        name: "description",
        content: "Checklist for hunters",
        hid: "description"
      },
      {
        name: "format-detection",
        content: "telephone=no, email=no, address=no"
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:creator", content: "Qrac_JP" },
      {
        property: "og:title",
        content: "Hunt Check",
        hid: "ogTitle"
      },
      {
        property: "og:description",
        content: "Checklist for hunters",
        hid: "ogDesc"
      },
      {
        property: "og:url",
        content: "https://huntcheck.qranoko.jp",
        hid: "ogUrl"
      },
      {
        property: "og:image",
        content: "https://huntcheck.qranoko.jp/ogp.png",
        hid: "ogImage"
      },
      { property: "og:site_name", content: "Qranoko" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ja_JP" }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Oswald"
      },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" }
    ]
  },
  loading: { color: "#C96D18" },
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  build: {
    extend(config) {
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    },
    plugins: []
  }
}
