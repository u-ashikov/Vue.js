<template>
  <div id="app">
    <h1 class="text-center">Create Book</h1>
    <hr class="col-md-4" />
    <form class="col-md-4 mx-auto">
      <div class="form-group">
        <label for="title">Title:</label>
        <input name="title" type="text" class="form-control" v-model="title" />
      </div>

      <div class="form-group">
        <label for="author">Author:</label>
        <input name="author" type="author" class="form-control" v-model="author" />
      </div>

      <button class="btn btn-info" v-on:click.prevent="createBook">Create</button>
    </form>
    <hr class="col-md-4" />
    <button class="d-block col-md-4 mx-auto btn btn-success" v-on:click.prevent="getBooks">Get Books</button>

    <ul class="list-group mt-3 col-md-4 mx-auto">
      <li v-for="book in books" class="list-group-item">{{ book.title }} - {{ book.author }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "",
      author: "",
      books: []
    };
  },
  methods: {
    getBooks: function() {
      this.resource
        .getAllBooks()
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.books = data;
        });
    },
    createBook: function () {
      this.resource
        .createBook({ title: this.title, author: this.author })
        .then(response => {
          this.title = '';
          this.author = '';
        }, 
        error => console.log(error));
    }
  },
  created: function () {
    const customActions = {
      getAllBooks: { method: "GET", url: "Books.json" },
      createBook: { method: "POST", url: "Books.json" }
    }

    this.resource = this.$resource('Books.json', {}, customActions);
  }
};
</script>