<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button class="btn btn-primary" v-on:click="navigateToHome()">Go To Home</button>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToHome: function () {
            this.$router.push('/');
        }
    }
}
</script>