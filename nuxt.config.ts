import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['~/modules/sitemap'],
  head: {
    link: [
      { rel: 'stylesheet', type: 'text/css', href: './assets/css/main.css' },
    ]
  },
  sitemap: {
    hostname: 'https://bhamdesigns.com',
  },
})