<template>
    <h3 class="mt-16 font-bold text-2xl text-center">포스트를 검색해보세요.</h3>
    <IconInput
        class="mt-8 w-1/2 m-auto"
        id="search"
        type="search"
        :placeholder="randomPlaceholder"
        v-model="postState.keyword"
        @onClick="getPostList"
    />
    <CategoryFilter class="mt-8" />
    <PostList />
</template>

<script setup lang="ts">
const { postState, getPostList } = usePosts();

onMounted(async () => {
    await getPostList();
});

const randomPlaceholder = computed(() => {
    const random = Math.floor(Math.random() * postState.value.postList.length);
    return postState.value.postList[random]?.title;
});
</script>
