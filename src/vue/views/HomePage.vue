<template>
    <div class="home">
        <AwesomeComponent msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import AwesomeComponent from '@/vue/components/AwesomeComponent.vue';

export default {
    name: 'HomePage',
    components: {
        AwesomeComponent,
    },
};
</script>
