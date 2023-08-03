<template>
    <IconInput id="search" type="search" v-model="test" />
    <PostList />
</template>

<script setup lang="ts">
const test = ref('');
</script>
