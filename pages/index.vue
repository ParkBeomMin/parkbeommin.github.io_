<template>
    <Info />
    <CategoryFilter />
    <PostList title="최신 포스트를 살펴보세요" :limit="5" :isShowCnt="false" />
</template>

<script setup lang="ts">
useHead({
    title: 'Beom Log',
    meta: [
        { name: 'description', content: '프론트엔드 기술블로그 입니다.' },
        { name: 'og:description', content: '프론트엔드 기술블로그 입니다.' },
        { name: 'keywords', content: '기술블로그, JavaScript, Vue, Nuxt, FrontEnd, 프론트엔드' },
        { name: 'og:image', content: '/assets/banner.png' },
        { name: 'robots', content: 'index, follow' },
    ],
});
</script>
