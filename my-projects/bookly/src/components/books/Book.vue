<template>
  <div class="col-md-3 col-sm-12 mb-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ author }}</p>
        <router-link tag="a" class="btn btn-primary" :to="{ name: 'details', params: { id: id }}">Details</router-link>
        <button class="btn btn-danger" v-on:click="deleteBook(id)">Delete</button>
        <router-link tag="a" class="btn btn-primary" :to="{ name: 'edit', params: { id: id }}">Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import books from '../../queries/books'

export default {
    props: ['id', 'title', 'author'],
    methods: {
        deleteBook: function (id) {
            var self = this;
            var idToken = this.$store.getters.idToken;

            books.deleteById(id, idToken)
                .then(function (response) {
                    if (response.status == 200) {
                        self.$router.go();
                    }
            });
        }
    }
}
</script>