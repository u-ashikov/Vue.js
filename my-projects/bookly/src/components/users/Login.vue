<template>
    <div>
        <h1 class="text-center">Login</h1>
        <hr>
        <form class="col-md-4 mx-auto" method="post" v-on:submit.prevent="loginUser">
        <p class="text-danger text-center" v-if="loginFailed">Invalid login!</p>
        <div class="form-group">
            <label for="email" class="h6">Email</label>
            <input id="email" type="email" class="form-control" v-bind:class="{ invalid: $v.email.$error }" v-on:blur="$v.email.$touch()" v-model="email"/>
            <p class="text-danger" v-if="!$v.email.email">Please enter a valid email address.</p>
            <p class="text-danger" v-if="$v.email.$error && !$v.email.required">The field email is required.</p>
        </div>

        <div class="form-group">
            <label for="password" class="h6">Password</label>
            <input id="password" type="password" class="form-control" v-bind:class="{ invalid: $v.password.$error }" v-on:blur="$v.password.$touch()" v-model="password"/>
            <p class="text-danger" v-if="$v.password.$error && !$v.password.required">The field password is required.</p>
        </div>

        <input type="submit" class="btn btn-success" value="Login" />
    </form>
    <hr class="col-md-4 mx-auto">
    <p class="text-left col-md-4 offset-md-4">
      Don't have an account? Register from <router-link tag="a" to="/users/register">here.</router-link>
    </p>
    </div>
</template>

<script>
import users from '../../queries/users'
import { required, email } from 'vuelidate/lib/validators'

export default {
    data: function () {
        return {
            email: '',
            password: '',
            loginFailed: false
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password : {
            required
        }
    },
    methods: {
        loginUser: function () {
            var self = this;

            if (this.$v.$invalid) {
                return;
            }

            this.$store.dispatch('login', { email: this.email, password: this.password })
                .then(function (response) {
                    if (response && response.status == 200) {
                        self.loginFailed = false;

                        self.$router.push('/');
                    } else {
                        self.loginFailed = true;
                    }
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
    }
}
</script>

<style scoped>
    input.invalid {
        border: 1px solid #fd4864;
        background-color: #FFEEEE;
    }
</style>