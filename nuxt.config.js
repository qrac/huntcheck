module.exports = {
  /*generate: {
  //  dir: "docs",
  //  minify: false
  },*/
  srcDir: "src/",
  modules: [
    "@nuxtjs/pwa",
    ["@nuxtjs/google-analytics", { id: "UA-40305123-20" }],
    ["nuxt-sass-resources-loader", ["./src/assets/css/_variable.scss"]]
  ],
  manifest: {
    lang: "ja",
    name: "Hunt Check",
    short_name: "Hunt Check",
    start_url: "/",
    background_color: "#160b0a",
    theme_color: "#C96D18",
    display: "standalone",
    icons: [
      {
        src: "/splash/icon-128x128.png",
        sizes: "128x128",
        type: "image/png"
      },
      {
        src: "/splash/icon-144x144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        src: "/splash/icon-152x152.png",
        sizes: "152x152",
        type: "image/png"
      },
      {
        src: "/splash/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/splash/icon-256x256.png",
        sizes: "256x256",
        type: "image/png"
      }
    ]
  },
  css: ["~/assets/css/style.scss"],
  head: {
    title: "Hunt Check",
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
        name: "apple-mobile-web-app-capable",
        content: "yes"
      },
      {
        name: "description",
        content:
          "モンスターハンターワールドの素材・タスクメモなどに使うチェックリストWebアプリ",
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
        content:
          "モンスターハンターワールドの素材・タスクメモなどに使うチェックリストWebアプリ",
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
        href: "https://fonts.googleapis.com/css?family=Slackey"
      },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "apple-touch-startup-image",
        href: "/splash/launch-640x1136.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "/splash/launch-750x1334.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "/splash/launch-1242x2208.png",
        media:
          "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "/splash/launch-1125x2436.png",
        media:
          "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "/splash/launch-1536x2048.png",
        media:
          "(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "/splash/launch-1668x2224.png",
        media:
          "(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "/splash/launch-2048x2732.png",
        media:
          "(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
      }
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
