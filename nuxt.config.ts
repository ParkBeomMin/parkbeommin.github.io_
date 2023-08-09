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
        experimental: {
            clientDB: true,
            stripQueryParameters: false,
        },
    },
    nitro: {
        prerender: {
            // rouztes: ["/posts/**"],

            crawlLinks: true,
            failOnError: false,
        },
    },
    // nitro: {
    //     prerender: { crawlLinks: true },
    // },

    gtag: {
        id: 'G-44YWDK9DBE',
    },
    // nitro: {},
    routeRules: {
        '/': { prerender: false },
        '/posts': { prerender: false },
        '/posts/**': { ssr: false, prerender: false },
    },
});
