<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 mx-auto">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <div v-if="!isSubmitted">
                        <h3 class="text-center">Register</h3>
                        <hr>
                    </div>

                    <form v-if="!isSubmitted">
                        <!-- <div class="form-group">
                            <label for="full-name">Full Name</label>
                            <input id="full-name" type="text" name="full-name" class="form-control" v-model="userInfo.fullName"/>
                        </div> -->

                        <full-name-input v-model="userInfo.fullName"></full-name-input>

                        <div class="form-group">
                            <label for="mail">Mail</label>
                            <input id="mail" type="email" name="mail" class="form-control" v-model="userInfo.mail"/>
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input id="password" type="password" name="password" class="form-control" v-model="userInfo.password"/>
                        </div>

                        <div class="form-check">
                            <input id="store-data" class="form-check-input" type="checkbox" v-model="userInfo.storeData">
                            <label class="form-check-label" for="store-data">
                                Store Data
                            </label>
                        </div>

                        <button class="btn btn-success d-block mx-auto" v-on:click.prevent="onSubmit()">Register</button>
                    </form>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userInfo.fullName }}</p>
                        <p>Mail: {{ userInfo.mail }}</p>
                        <p>Password: {{ userInfo.password }}</p>
                        <p>Store in Database?: {{ userInfo.storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullNameControl from './components/FullNameControl.vue'

    export default {
        components: {
            fullNameInput: FullNameControl
        },
        data: function () {
            return {
                userInfo: {
                    fullName: '',
                    mail: '',
                    password: '',
                    storeData: false
                },
                isSubmitted: false
            }
        },
        methods: {
            onSubmit: function () {
                this.isSubmitted = true;
            }
        }
    }
</script>

<style>
</style>
