<template>
    <header
        ref="header"
        :class="[
            `fixed flex h-16 w-full z-50 text-white`,
            { 'bg-white border-b-2 text-black fill-black': isScroll },
        ]"
    >
        <div class="flex flex-row max-w-5xl w-7/12 m-auto">
            <h1 class="flex-1">
                <nuxt-link to="/">
                    <IconLogo :isScroll="isScroll" />
                </nuxt-link>
            </h1>
            <ul class="flex flex-row">
                <li
                    v-for="(menu, i) of menuList"
                    :key="`menu-${i}`"
                    class="mr-2 transition hover:text-blue-400"
                >
                    <nuxt-link :to="menu.link">{{ menu.text }}</nuxt-link>
                </li>
            </ul>
        </div>
        <div
            ref="cat"
            :class="[
                { hidden: !catState.isShow },
                { '-scale-x-50': isScrollDown },
                `scale-50 bg-[url(~/assets/cats.png)] bg-no-repeat absolute w-[112px] h-32 animate-[run_1s_steps(10)_infinite]`,
            ]"
        ></div>
    </header>
</template>

<script setup lang="ts">
const menuList = reactive([
    { text: "Home", link: "/" },
    { text: "Posts", link: "/posts" },
    { text: "AboutMe", link: "/aboutMe" },
]);

const { catState } = useCat();

let isScroll = ref(false);
const header = ref();
let cat = ref();
let isScrollDown = ref(true);

onMounted(() => {
    window.addEventListener("scroll", () => {
        console.log("scroll", window.scrollY);

        console.log(
            "(header.value as HTMLElement).clientHeight",
            (header.value as HTMLElement).clientHeight
        );

        const scrollTop = document.querySelector("html")?.scrollTop ?? 0;
        const scrollHeight = document.querySelector("html")?.scrollHeight ?? 0;
        const clientHeight = document.querySelector("html")?.clientHeight ?? 0;

        console.log("scrollTop: ", scrollTop);
        console.log("clientHeight: ", clientHeight);
        console.log("scrollHeight: ", scrollHeight);

        // 아래 수식은 전체 세로폭 중 현재까지 스크롤한 값을 백분률 환산
        // 브라우저 최하단까지 스크롤을 내리면 100%가 됩니다.
        const progress = ((scrollTop + clientHeight) / scrollHeight) * 100;

        (cat.value as HTMLElement).style.left = `${catState.value.x}%`;

        if (window.scrollY <= (header.value as HTMLElement).offsetHeight) {
            isScroll.value = false;
        } else {
            isScroll.value = true;
        }
    });

    window.addEventListener("wheel", (e: WheelEvent) => {
        isScrollDown.value = e.deltaY > 0;
    });
});
</script>

<style>
@keyframes run {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: -1120px 0;
    }
}
</style>
