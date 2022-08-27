import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  layoutTransition: null,
  pageTransition: null,
  css: [
    '@/assets/css/main.css'
  ],
  modules: ['~/modules/sitemap'],
  sitemap: {
    hostname: 'https://bhamdesigns.com',
  },
  strict: true,
})