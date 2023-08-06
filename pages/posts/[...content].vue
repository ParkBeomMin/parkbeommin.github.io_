// https://velog.io/@1-blue/tailwindCss-markdown-%EC%A0%81%EC%9A%A9
<template>
    <main ref="content" class="my-8">
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
                class="mt-4 prose max-w-full"
                :value="doc"
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

let content = ref();
const { setIsShow, setX } = useCat();
onMounted(() => {
    window.addEventListener("scroll", () => {
        console.log("------------content");

        if ((content.value as HTMLElement)?.offsetTop - 64 <= scrollY) {
            setIsShow(true);
        } else {
            setIsShow(false);
        }

        console.log((content.value as HTMLElement)?.offsetTop);
        console.log((content.value as HTMLElement)?.scrollTop);
        console.log((content.value as HTMLElement)?.clientTop);
        console.log(window.scrollY);

        console.log((content.value as HTMLElement)?.offsetHeight);
        console.log((content.value as HTMLElement)?.scrollHeight);
        console.log((content.value as HTMLElement)?.clientHeight);

        const progress =
            ((window.scrollY - (content.value as HTMLElement)?.offsetTop) /
                ((content.value as HTMLElement)?.scrollHeight - 256 - 144)) *
            100;

        setX(progress);

        console.log(progress);
    });
});
</script>

<style>
h2 {
    font-weight: bold !important;
    font-size: 28px !important;
}
a {
    text-decoration: none !important;
}

pre {
    background-color: transparent !important;
    border: 1px solid #1f2937 !important;
    color: #1f2937 !important;
}

p > code {
    border: 1px solid #1f2937 !important;
    background-color: #1f2937 !important;
    color: white !important;
    border-radius: 4px;
}

p > code::before {
    display: none;
}
p > code::after {
    display: none;
}
</style>
