<template>
    <span
        v-if="big"
        class="sfsf"
        style=""
        @click="handler" />
    <div />
</template>

<script>
export default {
    name: 'App',
    computed: {
        big() {
            return '';
        },
    },
};
</script>

<style lang="scss">
.app {
  background-color: blue;
}
</style>
