// https://content.nuxtjs.org/api/composables/query-content
<template>
    <!-- <ContentList path="/posts" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
        </div>
    </ContentList> -->
    <h2>{{ title }}</h2>
    <ContentQuery path="/posts" :where="{ title: { $contains: searchKeyword } }" :limit="limit"
        ><template #default="{ data }">
            <span>{{ data.length }}</span>
            <ul>
                <li v-for="(post, i) of data" :key="i">
                    <nuxt-link :to="post._path">
                        {{ post.title }}
                    </nuxt-link>
                </li>
            </ul>
        </template>
        <template #not-found>
            <p>No post found.</p>
        </template></ContentQuery
    >
</template>

<script setup lang="ts">
const { title, searchKeyword, limit } = defineProps({
    title: {
        type: String,
        default: '',
    },
    searchKeyword: {
        type: String,
        default: '',
    },
    limit: {
        type: Number,
        default: 0,
    },
});

// const { getPostList } = usePosts();

// onMounted(async () => {
//     const test = await getPostList(searchKeyword);
//     console.log(test);
// });
</script>
