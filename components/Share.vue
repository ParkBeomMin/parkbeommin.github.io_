<template>
    <div class="border-t-2 my-8 pt-8 text-center">
        <p>끝까지 읽어주셔서 감사합니다.</p>
        <button
            ref="shareRef"
            class="flex my-4 mx-auto hover:animate-bounce"
            @click="share"
        >
            <IconFeather data-feather="share-2" class="mr-4" />포스트 공유하기
        </button>
    </div>
</template>

<script setup lang="ts">
import copy from "copy-to-clipboard";
const shareRef = ref();

const { showToast } = useToast();

let particles: Array<any> = [];
onMounted(() => {
    window.setTimeout(init, 700);
});
const share = () => {
    pop();
    const route = useRoute();
    console.log(route.fullPath);
    copy(`${window.location.host}${route.fullPath}`);
    showToast({ text: "클립보드에 복사되었습니다." });
};
const init = () => {
    // for (let i = particles.length - 1; i--; i > -1) {
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.style.transform = `translate3d(${p.x}px, ${p.y}px, 1px)`;

        p.x += p.vel.x;
        p.y += p.vel.y;

        p.vel.y += 0.5 * p.mass;
        if (p.y > (shareRef.value as HTMLElement).offsetTop * 2) {
            p.remove();
            particles.splice(i, 1);
        }
    }
    requestAnimationFrame(init);
};

const colors = ["#eb6383", "#fa9191", "#ffe9c5", "#b4f2e1"];
const pop = () => {
    for (let i = 0; i < 150; i++) {
        const p = document.createElement("particule") as any;
        // 시작 위치
        p.x = window.innerWidth * 0.5;
        p.y =
            (shareRef.value as HTMLElement).offsetTop +
            Math.random() * window.innerHeight * 0.3;
        // 속도 ?
        p.vel = {
            x: (Math.random() - 0.5) * 10,
            y: Math.random() * -20 - 15,
        };
        p.mass = Math.random() * 0.2 + 0.8;
        particles.push(p);
        p.style.transform = `translate(${p.x}px, ${p.y}px)`;
        const size = Math.random() * 15 + 5;
        p.style.width = size + "px";
        p.style.height = size + "px";
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(p);
    }
    init();
};
</script>

<style>
particule {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    box-shadow: 1px 1px 4px #eb6383;
    z-index: 99999;
}
</style>
