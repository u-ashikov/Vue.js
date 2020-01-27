<template>
  <div class="col-md-3 col-sm-12 mb-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ author }}</p>
        <router-link tag="a" class="btn btn-primary" :to="{ name: 'details', params: { id: id }}">Details</router-link>
        <button class="btn btn-danger" v-on:click="deleteBook(id)">Delete</button>
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
            books.deleteById(id)
                .then(function (response) {
                    if (response.status == 200) {
                        self.$router.go();
                    }
            });
        }
    }
}
</script>