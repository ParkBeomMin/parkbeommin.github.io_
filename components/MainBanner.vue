<template>
    <img
        ref="banner"
        class="w-full h-64 object-cover opacity-50"
        src="~/assets/banner.jpg"
        alt="banner"
    />
</template>

<script setup lang="ts">
const banner = ref();
let scaleFactor = ref(1); // Initial scale factor

onMounted(() => {
    window.addEventListener("scroll", () => {
        // Calculate the scale factor based on scroll position
        scaleFactor.value = 1 + window.scrollY * 0.001; // You can adjust the multiplication factor for the desired effect
        console.log(scaleFactor.value);
        // Apply the scale factor to the image
        console.log(banner.value as HTMLElement);
        if (banner.value) {
            (
                banner.value as HTMLElement
            ).style.transform = `scale(${scaleFactor.value})`;
        }
    });
});
</script>
