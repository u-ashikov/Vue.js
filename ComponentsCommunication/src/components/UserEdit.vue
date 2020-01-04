<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>My Age is: {{ userAge }}</p>
        <button v-on:click="editAge()">Edit Age</button>
    </div>
</template>

<script>
export default {
    props: ['userAge'],
    methods: {
        editAge: function () {
            this.userAge = 30;
            this.$emit('userage-changed', this.userAge);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
