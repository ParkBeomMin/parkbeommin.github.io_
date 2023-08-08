// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    target: "static",
    router: {
        base: "/parkbeommin.github.io/",
    },
    ssr: false,
    devtools: { enabled: true },
    modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-gtag"],
    content: {
        highlight: {
            theme: "github-light",
        },
        documentDriven: true,
        // experimental: {
        //     clientDB: true,
        //     stripQueryParameters: true,
        // },
    },

    gtag: {
        id: "G-44YWDK9DBE",
    },
    nitro: {
        routeRules: {
            "/": { static: true },
            "/posts/**": { static: true },
        },
        prerender: {
            routes: ["/sitemap.xml"],
        },
    },
});
