<template>
  <div>
    <h1 class="text-center">Create New Book</h1>
    <hr />

    <app-book-form v-bind:onSubmit="createBook">
        <template v-slot:submit-btn>
          <input
            type="submit"
            class="btn btn-success"
            value="Create"
          />
        </template>
      </app-book-form>
  </div>
</template>

<script>
import books from "../../queries/books";
import BookForm from "../books/BookForm";

export default {
    components: { appBookForm: BookForm },
    methods: {
    createBook: function(title, author, description, isbnNumber, idToken) {
      var self = this;

      books.create(title, author, description, isbnNumber, idToken)
          .then(function (response) {
              if (response && response.status == 200) {
                  self.$router.push('/books/all');
              }
          })
          .catch(function (error) {
              console.error(error);
          });
    }
  }
};
</script>