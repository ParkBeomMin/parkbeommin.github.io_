<template>
    <header class="fixed flex h-16 w-full z-50">
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
</script>
