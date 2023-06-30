// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      base_url: process.env.BASE_URL,
    },
  },

  app: {
    baseURL: '/gh_movie_website/',
    head: {
      title: 'FlixTv',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: [
        //This is just for example how to add js
        //you can  include js  by this method direact include or via import individual method as per below link
        //https://github.com/Debonex/samples/blob/master/nuxt3-bootstrap5/app.vue
        { src: 'https://awesome-lib.js' },
      ],
      link: [
        //This for just example how to add css
        { rel: 'stylesheet', href: 'https://awesome-lib.css' },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: 'http://flixtv.volkovdesign.com/main/img/logo.svg',
        },
      ],
    },
  },

  css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/css/main.css'], // add
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
