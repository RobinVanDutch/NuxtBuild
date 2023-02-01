
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],
    app: {
      head: {
        title: 'IPhone shop',
        charset: 'utf-8',
        meta: [
          {
            name: 'description',
            content: 'My amazing shop.'
          }
        ],
      },
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
})
