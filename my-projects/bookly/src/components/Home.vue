<template>
  <div class="jumbotron my-3">
    <h1 class="display-4">Hello, Welcome to my books application :)</h1>
    <p class="lead">This is a simple web application written with Vue JS.</p>
    <hr class="my-4" />
    <p>You can list, create, edit and delete books.</p>
    <router-link tag="a" class="btn btn-primary btn-lg" to="/books/all">See Books</router-link>
    <h3>{{ username }}</h3>
  </div>
</template>

<script>
import { store } from '../store/store'

export default {
    computed: {
      username: function () {
        return store.getters.username?  store.getters.username : "Not logged in!";
      }
    }
}
</script>