<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My Name is: {{ userName }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            userName: {
                type: String,
                required: true,
                default: 'Yulian'
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
