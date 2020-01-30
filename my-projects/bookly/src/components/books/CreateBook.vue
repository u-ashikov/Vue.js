<template>
  <div>
    <h1 class="text-center">Create New Book</h1>
    <hr />

    <form class="col-md-4 mx-auto" method="post">
        <div class="form-group">
            <label for="title" class="h6">Title</label>
            <input type="text" class="form-control"  v-model="title"/>
        </div>

        <div class="form-group">
            <label for="author" class="h6">Author</label>
            <input type="text" class="form-control" v-model="author" />
        </div>

        <div class="form-group">
            <label for="description" class="h6">Description</label>
            <textarea class="form-control" rows="7" v-model="description" />
        </div>

        <div class="form-group">
            <label for="isbnNumber" class="h6">ISBN Number</label>
            <input type="number" min="1" class="form-control" v-model="isbnNumber" />
        </div>

        <input v-on:click.prevent="createBook" type="submit" class="btn btn-success" value="Create Book"/>
    </form>
  </div>
</template>

<script>
import books from '../../queries/books'

export default {
    data: function () {
        return {
            author: '',
            title: '',
            description: '',
            isbnNumber: ''
        }
    },
    methods: {
        createBook: function () {
            var self = this;

            books.create(this.title, this.author, this.description, this.isbnNumber)
                .then(function (response) {
                    if (response && response.status == 200) {
                        self.$router.push('/books/all');
                    }
                });

            this.title = '';
            this.author = '';
            this.description = '';
            this.isbnNumber = '';
        }
    }
}
</script>