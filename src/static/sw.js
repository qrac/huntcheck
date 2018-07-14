importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "huntcheck",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/10e647192148b043f87f.js",
    "revision": "e11ff1ef5a69eedc191ab3632f4df0ac"
  },
  {
    "url": "/_nuxt/7474ed14cd9e4b491658.js",
    "revision": "407d154c55da223475c88ce391cdb684"
  },
  {
    "url": "/_nuxt/b6a8f9970f08632ab255.js",
    "revision": "4ce24b854a526698b443039c919ca72f"
  },
  {
    "url": "/_nuxt/e7ede14d60ae51e6a5fd.js",
    "revision": "9fb216a9aed44fd2fea63b27f1a96879"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

