<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>My Name is: {{ name }}</p>
        <p>My Age is: {{ age }}</p>
        <button v-on:click="changeName()">Change Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    v-bind:userName="name"
                    v-bind:userAge="age"
                >
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    v-bind:userAge="age"
                >
                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    import { eventBus } from '../main'; 

    export default {
        data: function () {
            return {
                name: 'Yulian',
                age: 20
            }
        },
        methods: {
            changeName: function () {
                this.name = 'Stamat'
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        mounted: function () {
            eventBus.$on('username-changed', (name) => {
                this.name = name;
            });

            eventBus.$on('userage-changed', (userAge) => {
                this.age = userAge;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
