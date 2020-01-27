<template>
  <div>
    <h1 class="text-center">Create New Book</h1>
    <hr />

    <form class="col-md-4 mx-auto" method="post">
        <div class="form-group">
            <label for="title" class="h6">Title</label>
            <input name="title" class="form-control"  v-model="title"/>
        </div>

        <div class="form-group">
            <label for="author" class="h6">Author</label>
            <input name="author" class="form-control" v-model="author" />
        </div>

        <input v-on:click.prevent="createBook" type="submit" class="btn btn-success" value="Create Book"/>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function () {
        return {
            author: '',
            title: ''
        }
    },
    methods: {
        createBook: function () {
            var self = this;

            axios.post('https://books-b6a94.firebaseio.com/Books.json', { author: this.author, title: this.title})
            .then(function (response) {
                if (response && response.status == 200) {
                    self.$router.push('/books/all');
                }
            });

            this.title = '';
            this.author = '';
        }
    }
}
</script>