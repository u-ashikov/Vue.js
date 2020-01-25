<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ id }}</p>
        <hr>
        <router-link tag="button" class="btn btn-primary" :to="{ name: 'userEdit', params: { id:id }}">Edit</router-link>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            id: this.$route.params.id
        }
    },
    beforeRouteEnter: function (to, from , next) {
        next();
    }
}
</script>