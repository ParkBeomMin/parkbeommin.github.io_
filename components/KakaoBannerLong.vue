<template>
    <div class="hidden md:flex">
        <ins class="kakao_ad_area m-auto" style="display: none" data-ad-unit="DAN-P0A2Z5R703NvpCaq" data-ad-width="728" data-ad-height="90"></ins>
    </div>
</template>

<script setup lang="ts">
useHead({
    script: [
        {
            type: 'text/javascript',
            src: '//t1.daumcdn.net/kas/static/ba.min.js',
            async: true,
        },
    ],
});
</script>
