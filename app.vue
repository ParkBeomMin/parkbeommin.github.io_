<template>
    <div class="min-h-screen w-full relative overflow-x-hidden">
        <Top />
        <MainBanner />
        <div class="max-w-5xl md:w-7/12 w-10/12 m-auto pb-36 relative">
            <NuxtPage />
        </div>
        <Footer />
        <Toast />
        <TopButton />
    </div>
</template>

<script setup lang="ts">
useHead({
    script: [
        {
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7426857657290789',
            crossorigin: 'anonymous',
            async: true,
        },
    ],
});
const { resetFilter } = usePosts();
const router = useRouter();
router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        resetFilter();
    }
    next();
});
</script>
