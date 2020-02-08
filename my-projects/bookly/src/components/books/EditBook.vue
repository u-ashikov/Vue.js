<template>
  <div>
    <h1 class="text-center">Edit Book</h1>
    <hr />

    <app-book-form v-bind:onSubmit="editBook" v-bind:isEdit="true">
        <template v-slot:submit-btn>
          <input
            type="submit"
            class="btn btn-success"
            value="Edit"
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
    editBook: function(bookId, title, author, description, isbnNumber, idToken) {
      var self = this;
      
      books.edit(bookId, title, author, description, isbnNumber, idToken)
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