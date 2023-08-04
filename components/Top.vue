<template>
    <header
        ref="header"
        :class="[
            `fixed flex h-16 w-full z-50 text-white`,
            { 'bg-white border-b-2 text-black': isScroll },
        ]"
    >
        <div class="flex flex-row max-w-5xl w-7/12 m-auto">
            <h1 class="flex-1">Beom Log</h1>
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
    </header>
</template>

<script setup lang="ts">
const menuList = reactive([
    { text: "Home", link: "/" },
    { text: "Posts", link: "/posts" },
    { text: "AboutMe", link: "/aboutMe" },
]);

let isScroll = ref(false);
const header = ref();

onMounted(() => {
    window.addEventListener("scroll", () => {
        console.log("scroll", window.scrollY);

        console.log(
            "(header.value as HTMLElement).clientHeight",
            (header.value as HTMLElement).clientHeight
        );

        if (window.scrollY <= (header.value as HTMLElement).offsetHeight) {
            isScroll.value = false;
        } else {
            isScroll.value = true;
        }
    });
});
</script>
