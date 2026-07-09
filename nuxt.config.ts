import galleries from './shared/data/galleries'

const SITE_URL = 'https://bhamdesigns.com'

// Every gallery is a statically generated route; noindex ones stay out of the sitemap.
const galleryRoutes = galleries.map(gallery => `/gallery/${gallery.slug}`)
const noIndexRoutes = galleries
  .filter(gallery => gallery.noIndex)
  .map(gallery => `/gallery/${gallery.slug}`)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxtjs/sitemap'],

  // SSG: prerender the whole site to static HTML so every page is crawlable.
  // (Was `ssr: false`, which shipped an empty SPA shell with no SEO.)
  ssr: true,

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
    },
  },

  css: ['~/assets/style.scss'],

  // Consumed by @nuxtjs/sitemap and by the useSeo() composable for absolute URLs.
  site: {
    url: SITE_URL,
    name: 'Bham Designs',
  },
  runtimeConfig: {
    public: {
      siteUrl: SITE_URL,
    },
  },

  // The stylesheet is small enough that a separate request costs more than it saves.
  features: {
    inlineStyles: true,
  },
  compatibilityDate: '2025-07-01',

  nitro: {
    prerender: {
      crawlLinks: true,
      // Nitro always overwrites /404.html with an empty SPA shell, so the real
      // error page is prerendered at /404 and copied over it by `postgenerate`.
      routes: ['/', '/404', ...galleryRoutes],
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
  sitemap: {
    exclude: noIndexRoutes,
  },
})
