<template>
    <div class="flex">
        <span>{{ timer }}</span>
    </div>
</template>

<script setup lang="ts">
let diffDay = reactive({
    date: 0,
    hour: 0,
    min: 0,
    sec: 0,
});

const random = Math.floor(Math.random() * 4);
const timer = computed(() => {
    const suffix = ["일", "시간", "분", "초"];
    console.log(random);
    const diffKeys = Object.keys(diffDay);
    const selectedDiffKey = diffKeys[random] as keyof typeof diffDay;
    return `${diffDay[selectedDiffKey]}${suffix[random]} 동안 운영중..`;
});

onMounted(() => {
    setInterval(() => {
        // diffDay = getDate();
        const { date, hour, min, sec } = getDate();
        diffDay.date = date;
        diffDay.hour = hour;
        diffDay.min = min;
        diffDay.sec = sec;
        // console.log(diffDay);
    }, 1000);
});

const getDate = () => {
    const startDate = new Date("2023/08/03 16:39:00");
    const curDate = new Date();
    const diff = curDate.getTime() - startDate.getTime();
    const diffDate = Math.floor(diff / (24 * 60 * 60 * 1000));
    const diffHour = Math.floor(diff / (60 * 60 * 1000));
    const diffMin = Math.floor(diff / (60 * 1000));
    const diffSec = Math.floor(diff / 1000);
    console.log("getdate");

    return { date: diffDate, hour: diffHour, min: diffMin, sec: diffSec };
};
</script>
