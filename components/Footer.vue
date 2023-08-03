<template>
    <div class="w-full h-36 absolute bottom-0">
        <p>{{ diffDay.date }}일 째 운영중</p>
        <p>{{ diffDay.hour }}시간 째 운영중</p>
        <p>{{ diffDay.min }}분 째 운영중</p>
        <p>{{ diffDay.sec }}초 째 운영중</p>
        <p>Copyright © 2023, All right reserved.</p>
    </div>
</template>

<script setup lang="ts">
let diffDay = reactive({
    date: 0,
    hour: 0,
    min: 0,
    sec: 0,
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
    const startDate = new Date('2023/08/03 16:39:00');
    const curDate = new Date();
    const diff = curDate.getTime() - startDate.getTime();
    const diffDate = Math.floor(diff / (24 * 60 * 60 * 1000));
    const diffHour = Math.floor(diff / (60 * 60 * 1000));
    const diffMin = Math.floor(diff / (60 * 1000));
    const diffSec = Math.floor(diff / 1000);
    console.log('getdate');

    return { date: diffDate, hour: diffHour, min: diffMin, sec: diffSec };
};
</script>
