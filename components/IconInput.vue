<template>
    <label :for="id" class="flex flex-row w-full">
        <input :id="id" type="text" class="flex-1" v-model="value" />
        <IconFeather :data-feather="type" class="cursor-pointer" />
    </label>
</template>

<script setup lang="ts">
const props = defineProps({
    id: {
        type: String,
        default: 'search',
    },
    type: {
        type: String,
        default: 'search',
    },
    modelValue: {
        type: String,
        default: '',
    },
});
// const { modelValue } = defineProps(['icon', 'modelValue']);

const emit = defineEmits(['update:modelValue']);

const value = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        console.log(value);

        emit('update:modelValue', value);
    },
});
</script>
