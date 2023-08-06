<template>
    <nuxt-link
        class="flex-1 text-center p-8 border-2 rounded cursor-pointer truncate transition hover:bg-blue-400 hover:text-white"
        :to="to"
        @mouseover="mouseover"
        @mouseout="mouseout"
        >{{ buttonText }}
    </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps<{
    to: string;
    text: string;
    hoverText: string;
    data?: object;
}>();

const buttonText = ref(props.text);

const mouseover = () => {
    buttonText.value = props.hoverText;
};
const mouseout = () => {
    buttonText.value = props.text;
};
</script>
