<template>
  <form class="col-md-4 mx-auto" method="post" v-on:submit.prevent="submit">
    <div class="form-group">
      <label for="title" class="h6">Title</label>
      <input type="text" class="form-control" v-model="title" />
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

    <slot name="submit-btn"></slot>
  </form>
</template>

<script>
import books from "../../queries/books";

export default {
  props: {
    isEdit: Boolean,
    onSubmit: Function
  },
  data: function() {
    return {
      title: "",
      author: "",
      description: "",
      isbnNumber: ""
    };
  },
  methods: {
    submit: function() {
        var bookId = this.$route.params.id;
        if (this.isEdit) {
            this.onSubmit(bookId, this.title, this.author, this.description, this.isbnNumber);
        } else {
            this.onSubmit(this.title, this.author, this.description, this.isbnNumber);
        }

      this.title = "";
      this.author = "";
      this.description = "";
      this.isbnNumber = "";
    }
  },
  mounted: function() {
    var self = this;

    if (this.isEdit) {
      var bookId = self.$route.params.id;

      books.getById(bookId).then(function(response) {
        if (response && response.status == 200) {
          var book = response.data;

          self.title = book.title;
          self.author = book.author;
          self.description = book.description;
          self.isbnNumber = book.isbnNumber;
        }
      });
    }
  }
};
</script>