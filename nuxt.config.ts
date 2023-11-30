// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  googleFonts: { families: { 'Open+Sans': true } },
  modules: ['@nuxtjs/google-fonts', '@pinia/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  typescript: { typeCheck: true }
});
