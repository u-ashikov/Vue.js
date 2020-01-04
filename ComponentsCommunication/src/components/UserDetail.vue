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
    import { eventBus } from '../main';

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
                eventBus.$emit('username-changed', this.userName);
            }
        },
        created: function () {
            eventBus.$on('userage-changed', (age) =>  {
                this.userAge = age;
            });

            eventBus.$on('username-changed', (name) => {
                this.userName = name;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
