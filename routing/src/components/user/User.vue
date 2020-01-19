<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <p>User with id: {{ id }} has been rendered.</p>
    <button class="btn btn-primary" v-on:click="navigateToHome()">Go To Home</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      id: this.$route.params.id
    };
  },
  watch: {
    $route: function(to, from) {
      this.id = to.params.id;
    }
  },
  methods: {
    navigateToHome: function() {
      this.$router.push("/");
    }
  }
};
</script>