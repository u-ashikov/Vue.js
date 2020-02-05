<template>
    <div>
        <h1 class="text-center">Login</h1>
        <hr>
        <form class="col-md-4 mx-auto" method="post" v-on:submit.prevent="loginUser">
        <div class="form-group">
            <label for="email" class="h6">Email</label>
            <input id="email" type="email" class="form-control" v-model="email"/>
        </div>

        <div class="form-group">
            <label for="password" class="h6">Password</label>
            <input id="password" type="password" class="form-control" v-model="password"/>
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

export default {
    data: function () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        loginUser: function () {
            var self = this;

            this.$store.dispatch('login', { email: this.email, password: this.password })
                .then(function () {
                    self.$router.push('/');
                });
        }
    }
}
</script>