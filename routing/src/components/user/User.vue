<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <p>User with id: {{ id }} has been rendered.</p>
    <button class="btn btn-primary" v-on:click="navigateToHome()">Go To Home</button>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    navigateToHome: function() {
      this.$router.push("/");
    }
  }
};
</script>