<template>
    <div class="flex w-full gap-x-2">
        <NextButton v-if="prev._path" :to="prev?._path" text="prev" :hoverText="prev?.title" />
        <NextButton v-if="next._path" :to="next?._path" text="next" :hoverText="next?.title" />
    </div>
</template>

<script setup lang="ts">
let prev = reactive({
    title: '',
    _path: '',
});
let next = reactive({
    title: '',
    _path: '',
});
const { page } = useContent();
const { postState, getPostList } = usePosts();
onMounted(async () => {
    if (postState.value.postList?.length == 0) {
        await getPostList();
    }

    const curIndex = postState.value.postList.findIndex((post) => post._path === page.value._path);
    const nextData = postState.value.postList?.[curIndex - 1];
    const prevData = postState.value.postList?.[curIndex + 1];
    if (nextData) {
        next.title = nextData.title;
        next._path = nextData._path;
    }
    if (prevData) {
        prev.title = prevData.title;
        prev._path = prevData._path;
    }
    // console.log("page", page.value._path);
    // console.log("prev.title", prev.title);
    // console.log("next.title", next.title);
});
</script>
