<template>
    <h3 class="mt-16 font-bold text-2xl text-center">포스트를 검색해보세요.</h3>
    <IconInput class="mt-8" id="search" type="search" :placeholder="randomPlaceholder" v-model="postState.keyword" @onClick="getPostList" />
    <CategoryFilter class="mt-8" />
    <PostList />
</template>

<script setup lang="ts">
useHead({
    title: 'Beom Log | Posts',
    meta: [
        { name: 'description', content: '프론트엔드 기술블로그 입니다.' },
        { name: 'og:description', content: '프론트엔드 기술블로그 입니다.' },
        { name: 'keywords', content: '기술블로그, JavaScript, Vue, Nuxt, FrontEnd, 프론트엔드' },
        { name: 'og:image', content: '/assets/banner.png' },
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
