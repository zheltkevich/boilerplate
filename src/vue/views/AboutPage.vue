<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div>
            <h2>ContentTabs</h2>
            <ContentTabs />
        </div>
    </div>
</template>

<script>
import ContentTabs from '@/vue/components/ContentTabs.vue';

export default {
    name: 'AboutPage',
    components: {
        ContentTabs,
    },
};
</script>
