<template>
  <div>
    <h1 class="text-center">Book Details</h1>
    <hr />
    <div class="card bg-light mb-3 col-6 mx-auto">
      <div class="card-header">ISBN Number: {{isbnNumber}}</div>
      <div class="card-body">
        <h5 class="card-title">{{ title }} ({{ author }})</h5>
        <p class="card-text">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import books from "../../queries/books";

export default {
  data: function() {
    return {
      id: '',
      author: '',
      title: '',
      isbnNumber: '',
      description: ''
    };
  },
  created: function() {
    var self = this;
    var idToken = this.$store.getters.idToken;

    this.id = this.$route.params.id;

    books.getById(this.id, idToken)
        .then(function(response) {
            if (response && response.data) {
                var book = response.data;

                self.title = book.title;
                self.author = book.author;
                self.description = book.description;
                self.isbnNumber = book.isbnNumber;
            }
        })
        .catch(function(error) {
            console.log(error);
        });
    }
};
</script>