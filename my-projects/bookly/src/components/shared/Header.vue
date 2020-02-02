<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand" tag="a">BookLy</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link tag="a" class="nav-item nav-link" to="/">Home</router-link>
        <router-link tag="a" class="nav-item nav-link" to="/books/all">Books</router-link>
        <router-link tag="a" class="nav-item nav-link" to="/books/create">Create New</router-link>
        <router-link tag="a" class="nav-item nav-link" to="/users/register">Register</router-link>
        <router-link tag="a" class="nav-item nav-link" to="/users/login">Login</router-link>
      </div>
    </div>
  </nav>
</template>