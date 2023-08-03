<template>
    <ul class="flex mb-8">
        <li
            v-for="(category, i) of categoryList"
            :key="`category-${i}`"
            class="mr-3 p-1 px-2 rounded-3xl transition duration-500 hover:scale-125 hover:bg-slate-500 hover:text-white"
        >
            <a href="javascript:void(0)"> #{{ category }} </a>
        </li>
    </ul>
</template>

<script setup lang="ts">
const postList = await queryContent("posts").find();
console.log(postList);
const categoryList = postList
    .flatMap((post) => post.categories?.split(" "))
    .filter((v) => v);
console.log(categoryList);
</script>
