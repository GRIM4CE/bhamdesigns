import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['~/modules/sitemap'],
  sitemap: {
    hostname: 'https://bhamdesigns.com',
  },
})