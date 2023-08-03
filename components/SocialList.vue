<template>
    <div class="flex mt-2">
        <a
            class="mr-2"
            v-for="(social, index) in socialList"
            :key="index"
            :href="social.link"
        >
            <IconFeather :data-feather="social.type" />
        </a>
    </div>
</template>

<script setup lang="ts">
const socialList = reactive([
    { type: "github", link: "https://github.com/ParkBeomMin" },
    { type: "mail", link: "mailto:club20608@gmail.com" },
]);
</script>
