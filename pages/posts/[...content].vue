// https://velog.io/@1-blue/tailwindCss-markdown-%EC%A0%81%EC%9A%A9
<template>
    <main ref="contentDoc" class="my-8">
        <ContentDoc v-slot="{ doc }">
            <div class="pb-4 border-b-2 border-black">
                <h1 class="font-bold md:text-3xl text-xl">{{ doc.title }}</h1>
                <span v-for="(category, i) of doc.categories?.split(' ')" :key="`category-${i}`" class="mr-2 text-blue-400">#{{ category }}</span>
                <p class="mt-4 text-right">{{ getDate(doc.date) }}</p>
            </div>
            <ContentRendererMarkdown class="mt-4 prose max-w-full keepall" :value="convertImgPath(doc)" />
        </ContentDoc>
        <Share />
        <KakaoBannerLong />
        <Comment />
        <NextPost />
        <KakaoBannerBox />
    </main>
</template>

<script setup lang="ts">
const { page } = useContent();
useSeoMeta({
    description: page.value.description || '프론트엔드 기술블로그 입니다.',
    ogDescription: page.value.description || '프론트엔드 기술블로그 입니다.',
    ogImage: page.value.thumbnail ?? '/banner.jpg',
});
useHead({
    meta: [
        { name: 'keywords', content: page.value.categories?.split(' ').join(', ') },
        { name: 'robots', content: 'index, follow' },
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                type: 'application/ld+json',
                textContent: {
                    '@context': 'https://schema.org',
                    '@type': 'BlogPosting',
                    headline: page.value.title,
                    description: page.value.description || '프론트엔드 기술블로그 입니다.',

                    image: [page.value.thumbnail ?? '/banner.jpg'],
                    author: [
                        {
                            '@type': 'Person',
                            name: 'bmpark',
                            email: 'club20608@gmail.com',
                            url: 'https://beomlog.run.goorm.site/',
                        },
                    ],
                    nationality: {
                        '@type': 'Country',
                        name: 'South Korea',
                    },
                    inLanguage: 'ko',
                    keywords: page.value.categories?.split(' ').join(', '),
                },
            }),
        },
    ],
});

const getDate = (value: string) => {
    try {
        const tmp = new Date(value);
        const year = tmp.getFullYear();
        const month = tmp.getMonth() + 1 >= 10 ? tmp.getMonth() + 1 : `0${tmp.getMonth() + 1}`;
        const date = tmp.getDate() >= 10 ? tmp.getDate() : `0${tmp.getDate()}`;
        return `${year}.${month}.${date}`;
    } catch (e) {
        return '';
    }
};

const convertImgPath = (data: any) => {
    return JSON.parse(JSON.stringify(data).replace(/\/assets/g, '/images'));
};

const components = { h2: '' };

let contentDoc = ref();
const { setIsShow, setX } = useCat();
onMounted(() => {
    window.addEventListener('scroll', () => {
        // console.log(
        //     "------------content",
        //     contentDoc.value.getBoundingClientRect()
        // );

        if ((contentDoc.value as HTMLElement)?.getBoundingClientRect().y - 64 <= scrollY) {
            setIsShow(true);
        } else {
            setIsShow(false);
        }

        // console.log((contentDoc.value as HTMLElement)?.offsetTop);
        // console.log((contentDoc.value as HTMLElement)?.scrollTop);
        // console.log((contentDoc.value as HTMLElement)?.clientTop);
        // console.log(window.scrollY);

        // console.log((contentDoc.value as HTMLElement)?.offsetHeight);
        // console.log((contentDoc.value as HTMLElement)?.scrollHeight);
        // console.log((contentDoc.value as HTMLElement)?.clientHeight);

        const progress = ((window.scrollY - (contentDoc.value as HTMLElement)?.offsetTop) / ((contentDoc.value as HTMLElement)?.scrollHeight - 512 - 288)) * 100;

        if (progress) {
            setX(progress);
        }

        // console.log(progress);
    });
});
</script>

<style>
@media (min-width: 768px) {
    .prose h2 > a {
        font-weight: bold !important;
        font-size: 28px !important;
    }
}
.prose h2 > a {
    font-weight: bold !important;
    font-size: 20px !important;
}
.prose a {
    text-decoration: none !important;
}

.prose pre {
    background-color: #fafafa;
    color: #1f2937;
}

.prose p > code {
    border: 1px solid #1f2937;
    background-color: #1f2937;
    color: white;
    border-radius: 4px;
}

.prose p > code::before {
    display: none;
}
.prose p > code::after {
    display: none;
}

.prose img {
    margin: auto;
}
</style>
