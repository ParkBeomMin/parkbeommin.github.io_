<template>
    <div class="flex">
        <ins class="kakao_ad_area m-auto" style="display: none" data-ad-unit="DAN-wQHAfPuTc8YoIQow" data-ad-width="300" data-ad-height="250"></ins>
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
