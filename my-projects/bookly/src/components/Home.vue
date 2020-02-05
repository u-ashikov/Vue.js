<template>
  <div class="jumbotron my-3">
    <h1 class="display-4">Hello, Welcome to my books application :)</h1>
    <p class="lead">This is a simple web application written with Vue JS.</p>
    <hr class="my-4" />
    <p>You can list, create, edit and delete books.</p>
    <router-link v-if="isAuthenticated" tag="a" class="btn btn-primary btn-lg" to="/books/all">See Books</router-link>
    <p v-else>
      Please login from <router-link tag="a" to="/users/login">here.</router-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated: function () {
      return this.$store.getters.isAuthenticated;
    }
  }
}
</script>