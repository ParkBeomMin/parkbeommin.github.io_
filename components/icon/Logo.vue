<template>
    <svg
        :class="[
            { 'fill-white hover:animate-[stroke_1s_linear]': !isScroll },
            { 'hover:animate-[strokeBlack_1s_linear]': isScroll },
        ]"
        width="180"
        height="60"
        viewBox="0 0 180 60"
    >
        <text
            y="30%"
            :class="`text-xl animate-[${
                isScroll ? 'strokeBlack' : 'strokeBlack'
            }_1s_linear]`"
        >
            Beom Log
        </text>
    </svg>
</template>

<script setup lang="ts">
const { isScroll } = defineProps({
    isScroll: {
        type: Boolean,
        default: false,
    },
});
</script>

<style>
text {
    stroke-dasharray: 24px;
}

@keyframes stroke {
    0% {
        stroke: white;
        stroke-width: 1px;
        stroke-dashoffset: 24px;
    }
    70% {
        fill: transparent;
    }
    98% {
        stroke: white;
        stroke-width: 1px;
    }
    100% {
        fill: white;
        stroke-dashoffset: 0px;
    }
}

@keyframes strokeBlack {
    0% {
        stroke: black;
        stroke-width: 1px;
        stroke-dashoffset: 24px;
    }
    70% {
        fill: transparent;
    }
    98% {
        stroke: black;
        stroke-width: 1px;
    }
    100% {
        fill: black;
        stroke-dashoffset: 0px;
    }
}
</style>
