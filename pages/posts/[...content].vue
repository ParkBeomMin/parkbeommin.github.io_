<template>
    <main>
        <ContentDoc v-slot="{ doc }">
            <h1>{{ doc.title }}</h1>
            <h1>{{ doc.date }}</h1>
            <h1>{{ doc.categories }}</h1>
            <ContentRenderer :value="doc" />
        </ContentDoc>
    </main>
</template>
