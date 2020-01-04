<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My Name is: {{ userName }}</p>
        <p>My Age is: {{ userAge }}</p>
        <button v-on:click="resetName()">Reset Name</button>
    </div>
</template>

<script>
    export default {
        props: {
            userName: {
                type: String,
                required: true,
                default: 'Yulian'
            },
            userAge : {
                type: Number
            }
        },
        methods: {
            resetName: function() {
                this.userName = 'Yulian'
                this.$emit('username-changed', this.userName);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
