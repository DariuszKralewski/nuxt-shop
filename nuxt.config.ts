// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Mój sklep',
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'Mój sklep' },
        { name: 'keywords', content: 'shop, sklep' },
      ],
    },
  },
});
