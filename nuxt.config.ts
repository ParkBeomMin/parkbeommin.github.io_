// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-gtag"],
    content: {
        highlight: {
            theme: "github-light",
        },
        documentDriven: true,
        experimental: {
            clientDB: true,
            stripQueryParameters: false,
        },
    },

    // nitro: {
    //     prerender: { crawlLinks: true },
    // },

    gtag: {
        id: "G-44YWDK9DBE",
    },
});
