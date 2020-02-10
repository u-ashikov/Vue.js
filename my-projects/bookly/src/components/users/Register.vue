<template>
  <div>
    <h1 class="text-center">Register</h1>
    <hr />
    <form class="col-md-4 mx-auto" method="post" v-on:submit.prevent="registerUser">
      <div class="form-group">
        <label for="username" class="h6">Username</label>
        <input id="username" type="text" class="form-control" v-bind:class="{ invalid: $v.username.$error }" v-on:blur="$v.username.$touch()" v-model="username" />
        <p class="text-danger" v-if="$v.username.$error && !$v.username.required">The field username is required.</p>
        <p class="text-danger" v-if="$v.username.$error && !$v.username.unique">The username is already taken.</p>
      </div>

      <div class="form-group">
        <label for="email" class="h6">Email</label>
        <input id="email" type="email" class="form-control" v-bind:class="{ invalid: $v.email.$error }" v-on:blur="$v.email.$touch()" v-model="email" />
        <p class="text-danger" v-if="$v.email.$error && !$v.email.required">The email field is required.</p>
        <p class="text-danger" v-if="!$v.email.email">Please enter a valid email address.</p>
        <p class="text-danger" v-if="$v.email.$error && !$v.email.unique">The email is already taken.</p>
      </div>

      <div class="form-group">
        <label for="password" class="h6">Password</label>
        <input id="password" type="password" class="form-control" v-bind:class="{ invalid: $v.password.$error }" v-on:blur="$v.password.$touch()" v-model="password" />
        <p class="text-danger" v-if="$v.password.$error && !$v.password.required">The password field is required.</p>
        <p class="text-danger" v-if="!$v.password.minLength">The password must be at least {{ $v.password.$params.minLength.min }} symbols length.</p>
      </div>

      <input type="submit" class="btn btn-success" value="Register" />
    </form>
    <hr class="col-md-4 mx-auto">
    <p class="text-left col-md-4 offset-md-4">
      Already have an account? Login from <router-link tag="a" to="/users/login">here.</router-link>
    </p>
  </div>
</template>

<script>
import users from "../../queries/users"
import { validations } from '../../validations/users/register'

export default {
  data: function() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  validations: validations,
  methods: {
    registerUser: function() {
        var self = this;

        if (this.$v.$invalid) {
          return;
        }

        this.$store.dispatch('register', { username: this.username, email: this.email, password: this.password})
          .then(function () {
            self.$router.push('/');
          });
    }
  }
};
</script>