<template>
    <div class="min-h-screen w-full relative overflow-x-hidden">
        <Top />
        <MainBanner />
        <div class="max-w-5xl w-7/12 m-auto pb-36 relative">
            <NuxtPage />
        </div>
        <Footer />
        <Toast />
        <TopButton />
    </div>
</template>

<script setup lang="ts">
// Import the functions you need from the SDKs you need

// } catch (e) {
//     console.warn(e);
// }
const { resetFilter } = usePosts();
const router = useRouter();
router.beforeEach((to, from, next) => {
    if (to.path === "/") {
        resetFilter();
    }
    next();
});
</script>
