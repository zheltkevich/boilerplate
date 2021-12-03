<template>
    <div class="hello">
        <h1>{{ greetings }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
        </p>
    </div>
</template>

<script>
export default {
    name: 'AwesomeComponent',
    props: {
        greetings: {
            type: String,
            default: 'Hello! I am your awesome component!',
        },
    },
};
</script>

<style lang="scss">
h1 {
    margin: 40px 0 0;
    text-align: center;
}

ul {
    padding: 0;
    list-style-type: none;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
