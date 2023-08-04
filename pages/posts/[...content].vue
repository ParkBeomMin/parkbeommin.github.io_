// https://velog.io/@1-blue/tailwindCss-markdown-%EC%A0%81%EC%9A%A9
<template>
    <main class="my-8">
        <ContentDoc v-slot="{ doc }">
            <div class="pb-4 border-b-2 border-black">
                <h1 class="font-bold text-3xl">{{ doc.title }}</h1>
                <span
                    v-for="(category, i) of doc.categories?.split(' ')"
                    :key="`category-${i}`"
                    class="mr-2 text-blue-400"
                    >#{{ category }}</span
                >
                <p class="mt-4 text-right">{{ getDate(doc.date) }}</p>
            </div>
            <ContentRendererMarkdown
                class="mt-4 prose"
                :value="doc"
                :components="components"
            />
        </ContentDoc>
    </main>
</template>

<script setup lang="ts">
const getDate = (value: string) => {
    try {
        const tmp = new Date(value);
        const year = tmp.getFullYear();
        const month =
            tmp.getMonth() + 1 >= 10
                ? tmp.getMonth() + 1
                : `0${tmp.getMonth() + 1}`;
        const date = tmp.getDate() >= 10 ? tmp.getDate() : `0${tmp.getDate()}`;
        return `${year}.${month}.${date}`;
    } catch (e) {
        return "";
    }
};

const components = {};
</script>

<style>
h2 {
    font-weight: bold !important;
    font-size: 28px !important;
}
a {
    text-decoration: none !important;
}
</style>
