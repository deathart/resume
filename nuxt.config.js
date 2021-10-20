export default {
  /*     // Facebook & LinkedIn
    { property: "og:title", content: options.title },
    { property: "og:description", content: options.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: options.url },
    { property: "og:image", content: options.img },
    { property: "og:image:width", content: options.img_size.width },
    { property: "og:image:height", content: options.img_size.height },
    { property: "og:locale", content: options.locale },
    { property: "og:site_name", content: options.site_name },

    // Twitter
    { name: "twitter:card", content: options.twitter_card },
    { name: "twitter:site", content: options.twitter },
    { name: "twitter:creator", content: options.twitter },
    { name: "twitter:title", content: options.title },
    { name: "twitter:description", content: options.description },
    { name: "twitter:image", content: options.img },
    { name: "twitter:image:width", content: options.img_size.width },
    { name: "twitter:image:height", content: options.img_size.height },
    */
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Brabant Louis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/node_modules/@iconify/iconify/dist/iconify.min.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/layouts',
      '~/components/modules'
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
    ['nuxt-mail', {
      message: { name: 'contact', to: process.env.MAIL_TO },
      smtp: {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        }
      },
    }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fr'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        "postcss-custom-properties": false
      },
    },
  },

  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
  }
}
