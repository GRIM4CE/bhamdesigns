import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  layoutTransition: null,
  pageTransition: null,
  head: {
    link: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://bhamdesigns.imgix.net" }
    ]
  },
  css: [
    '@/assets/style.scss'
  ],
  modules: ['~/modules/sitemap'],
  sitemap: {
    hostname: 'https://bhamdesigns.com',
  },
  strict: true,
})