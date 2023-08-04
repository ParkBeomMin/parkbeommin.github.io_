<template>
    <label :for="id" class="flex flex-row w-full">
        <input
            :id="id"
            type="text"
            class="flex-1 rounded-xl border-2 border-blue-400 pl-2"
            :placeholder="placeholder"
            v-model="value"
            @keypress.enter="emit('onClick')"
        />
        <button @click="emit('onClick')">
            <IconFeather
                :data-feather="type"
                class="cursor-pointer ml-2 text-blue-400 transition hover:translate-x-1"
            />
        </button>
    </label>
</template>

<script setup lang="ts">
const props = defineProps({
    id: {
        type: String,
        default: "search",
    },
    type: {
        type: String,
        default: "search",
    },
    placeholder: {
        type: String,
        default: "",
    },
    modelValue: {
        type: String,
        default: "",
    },
});
// const { modelValue } = defineProps(['icon', 'modelValue']);

const emit = defineEmits(["update:modelValue", "onClick"]);

const value = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    },
});
</script>
