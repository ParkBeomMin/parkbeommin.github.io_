// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    devtools: { enabled: true },
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-gtag'],
    content: {
        highlight: {
            theme: 'github-light',
        },
        documentDriven: true,
        // experimental: {
        //     clientDB: true,
        //     stripQueryParameters: true,
        // },
    },

    gtag: {
        id: 'G-44YWDK9DBE',
    },
});
