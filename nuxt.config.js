import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core'
import fetch from 'cross-fetch'
import { GET_PROJECTS } from './assets/js/graphql.js'

export default {
  privateRuntimeConfig: {
    apolloKey: process.env.APOLLO_API_KEY,
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bhamdesigns',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  generate: {
    routes: async () => {
      // Currently need to initiate apollo inside of generate for dynamic generated routes
      // Potential for refactor at a later date.
      const httpLink = createHttpLink({
        uri: process.env.APOLLO_PATH,
        fetch,
        headers: { 'x-api_key': process.env.APOLLO_API_KEY },
      })
      const cache = new InMemoryCache()
      const client = new ApolloClient({
        link: httpLink,
        cache,
      })
      const res = await client.query({ query: GET_PROJECTS })
      return res.data.projects
        .map((project) => {
          if (!project.slug) return null
          return {
            route: '/gallery/' + project.slug.path,
            payload: project,
          }
        })
        .filter((route) => route)
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  apollo: {
    clientConfigs: {
      default: '~/app/apollo.js',
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/apollo'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
