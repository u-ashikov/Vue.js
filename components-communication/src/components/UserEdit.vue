<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>My Age is: {{ userAge }}</p>
        <button v-on:click="editAge()">Edit Age</button>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    props: ['userAge'],
    methods: {
        editAge: function () {
            this.userAge = 30;
            eventBus.$emit('userage-changed', this.userAge);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
