<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand" tag="a">BookLy</router-link>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav mr-auto">
         <li class="nav-item">
           <router-link tag="a" class="nav-link" to="/">Home</router-link>
         </li>
         <li class="nav-item">
           <router-link v-if="isAuthenticated" tag="a" class="nav-link" to="/books/all">Books</router-link>
         </li>
         <li class="nav-item">
           <router-link v-if="isAuthenticated" tag="a" class="nav-link" to="/books/create">Create New</router-link>
         </li>
       </ul>
       <ul class="navbar-nav ml-auto">
         <li class="nav-item">
           <router-link v-if="!isAuthenticated" tag="a" class="nav-link" to="/users/login">Login</router-link>
         </li>
         <li class="nav-item">
           <router-link v-if="!isAuthenticated" tag="a" class="nav-link" to="/users/register">Register</router-link>
         </li>
         <li class="nav-item">
           <a v-if="isAuthenticated" href="/" class="nav-item nav-link ml-auto" v-on:click="onLogout">Logout</a>
         </li>
       </ul>
     </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isAuthenticated: function () {
        return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    onLogout: function () {
        this.$store.dispatch('logout');
    }
  }
}
</script>