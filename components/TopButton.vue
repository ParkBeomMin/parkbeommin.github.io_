<template>
    <div id="top-button" :class="['fixed right-8 bottom-8 w-16 h-16 z-50 flex', { 'invisible opacity-0': !isShow }]">
        <button class="m-auto" @click="goTop"><IconFeather data-feather="arrow-up-circle" /></button>
    </div>
</template>

<script setup lang="ts">
const { setIsBack } = useCat();
const goTop = async () => {
    setIsBack(true);
    await window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

const isShow = ref(false);

onMounted(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            isShow.value = true;
        } else {
            isShow.value = false;
        }
    });
});
</script>

<style>
#top-button {
    transition: 0.3s ease-out;
}
</style>
