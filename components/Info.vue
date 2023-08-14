<template>
    <div class="flex flex-row w-full p-6 border-b-2 border-slate-300 mb-4">
        <div class="hidden md:block basis-1/4">
            <img class="m-auto w-24 h-24 rounded-full object-cover border-double border-2 border-slate-300 transition duration-500 hover:scale-125" src="~/assets/profile.jpg" alt="profile" />
        </div>
        <div class="">
            <h3 class="mb-1 font-bold text-lg">박범민</h3>
            <span class="mr-2 p-1 md:rounded-md md:bg-slate-500 md:text-white flex before:content-['✨'] md:inline" v-for="(keyword, i) of keywordList" :key="`keyword-${i}`">{{ keyword }}</span>
            <SocialList />
        </div>
    </div>
</template>

<script setup lang="ts">
const keywordList = reactive(['FrontEnd Engineer', '까망베르 집사🐈🐈‍⬛', 'DX']);
</script>
