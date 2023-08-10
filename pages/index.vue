<template>
    <Info />
    <CategoryFilter />
    <PostList title="최신 포스트를 살펴보세요" :limit="5" :isShowCnt="false" />
</template>

<script setup lang="ts">
useSeoMeta({
    title: "Beom Log",
    ogTitle: "Beom Log",
    description: "프론트엔드 기술블로그 입니다.",
    ogDescription: "프론트엔드 기술블로그 입니다.",
    ogImage: "/assets/banner.png",
});
useHead({
    meta: [
        {
            name: "keywords",
            content: "기술블로그, JavaScript, Vue, Nuxt, FrontEnd, 프론트엔드",
        },
        { name: "robots", content: "index, follow" },
    ],
});

// import { initializeApp } from 'firebase/app';
// import { getAnalytics, logEvent } from 'firebase/analytics';

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// const config = useRuntimeConfig();
// console.log(config);

// const firebaseConfig = {
//     apiKey: 'AIzaSyC_bQgvZYtcQjwmmXR2I1YfyZLM7P1t9tQ',
//     authDomain: 'forestvue-8424e.firebaseapp.com',
//     databaseURL: 'https://forestvue-8424e.firebaseio.com',
//     projectId: 'forestvue-8424e',
//     storageBucket: 'forestvue-8424e.appspot.com',
//     messagingSenderId: '183393322822',
//     appId: '1:183393322822:web:2254d60c4ee00c7812c747',
// };
// // Initialize Firebase
// // try {
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// analytics.app.options;

// onBeforeRouteLeave((to, from) => {
//     console.log('route leave', from);
//     console.log('route leave', from.meta.title);

//     logEvent(analytics, 'page_view', { page_title: from.meta.title as string });
// });
</script>
