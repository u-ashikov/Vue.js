<template>
  <div>
    <h1 class="text-center">Register</h1>
    <hr />
    <form class="col-md-4 mx-auto" method="post" v-on:submit.prevent="registerUser">
      <div class="form-group">
        <label for="username" class="h6">Username</label>
        <input id="username" type="text" class="form-control" v-model="username" />
      </div>

      <div class="form-group">
        <label for="email" class="h6">Email</label>
        <input id="email" type="email" class="form-control" v-model="email" />
      </div>

      <div class="form-group">
        <label for="password" class="h6">Password</label>
        <input id="password" type="password" class="form-control" v-model="password" />
      </div>

      <input type="submit" class="btn btn-success" value="Register" />
    </form>
  </div>
</template>

<script>
import users from "../../queries/users";

export default {
  data: function() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    registerUser: function() {
        var self = this;

        this.$store.dispatch('register', { username: this.username, email: this.email, password: this.password})
          .then(function () {
            self.$router.push('/');
          });
    }
  }
};
</script>