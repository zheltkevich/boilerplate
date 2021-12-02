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
#app {
    font-size: 1.3em;
}
body {
    margin: 21px;
}
</style>
