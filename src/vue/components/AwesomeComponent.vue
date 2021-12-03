<template>
    <div class="hello">
        <h1>{{ greetings }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
        </p>
        <img
            width="100"
            height="100"
            src="@/assets/img/logo.png"
            alt="test">
        <div
            class="image"
            src="@/assets/img/logo.png" />
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
.image {
    width: 150px;
    height: 150px;
    background-image: url("@/assets/img/logo.png");
    background-size: cover;
}

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
