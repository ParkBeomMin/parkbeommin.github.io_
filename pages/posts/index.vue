<template>
    <h3 class="mt-16 font-bold text-2xl text-center">포스트를 검색해보세요.</h3>
    <IconInput class="mt-8" id="search" type="search" :placeholder="randomPlaceholder" v-model="postState.keyword" @onClick="getPostList" />
    <CategoryFilter class="mt-8" />
    <PostList />
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Beom Log | Posts',
    ogTitle: 'Beom Log | Posts',
    description: '프론트엔드 기술블로그 입니다.',
    ogDescription: '프론트엔드 기술블로그 입니다.',
    ogImage: '/assets/banner.png',
});
useHead({
    title: 'Beom Log | Posts',
    meta: [
        { name: 'keywords', content: '기술블로그, JavaScript, Vue, Nuxt, FrontEnd, 프론트엔드' },
        { name: 'robots', content: 'index, follow' },
    ],
});

const { postState, getPostList, resetFilter } = usePosts();

const randomPlaceholder = computed(() => {
    const random = Math.floor(Math.random() * postState.value.postList.length);
    return postState.value.postList[random]?.title;
});

onBeforeRouteLeave((to, from) => {
    if (!to.fullPath.includes('/posts')) {
        resetFilter();
    }
});
</script>
