export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/i18n'],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Χειροποίητα — Handmade Creations',
      meta: [
        { name: 'description', content: 'Discover unique handmade jewelry, accessories and decoratives made with passion.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700&display=swap' }
      ]
    }
  },

  routeRules: {},

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'el',
    locales: [
      { code: 'el', name: 'Ελληνικά', file: 'el.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    langDir: 'locales/',
    detectBrowserLanguage: false
  }
})
