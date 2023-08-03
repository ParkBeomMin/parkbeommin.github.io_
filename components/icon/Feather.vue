<template>
    <i :data-feather="dataFeather"></i>
</template>

<script setup lang="ts">
import feather from 'feather-icons';
const { dataFeather } = defineProps<{ dataFeather: string }>();
onMounted(() => {
    feather.replace();
});
</script>
