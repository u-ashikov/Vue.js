<template>
  <form class="col-md-4 mx-auto" method="post" v-on:submit.prevent="submit">
    <div class="form-group">
      <label for="title" class="h6">Title</label>
      <input type="text" class="form-control" v-bind:class="{ invalid: $v.title.$error }" v-on:blur="$v.title.$touch()" v-model="title" />
      <p class="text-danger" v-if="$v.title.$error && !$v.title.required">The title field is required.</p>
    </div>

    <div class="form-group">
      <label for="author" class="h6">Author</label>
      <input type="text" class="form-control" v-bind:class="{ invalid: $v.author.$error }" v-on:blur="$v.author.$touch()" v-model="author" />
      <p class="text-danger" v-if="$v.author.$error && !$v.author.required">The author field is required.</p>
    </div>

    <div class="form-group">
      <label for="description" class="h6">Description</label>
      <textarea class="form-control" v-bind:class="{ invalid: $v.description.$error }" rows="7" v-on:blur="$v.description.$touch()" v-model="description" />
      <p class="text-danger" v-if="$v.description.$error && !$v.description.required">The description field is required.</p>
      <p class="text-danger" v-if="!$v.description.maxLength">The description field can be at most {{ $v.description.$params.maxLength.max }} symbols length.</p>
    </div>

    <div class="form-group">
      <label for="isbnNumber" class="h6">ISBN Number</label>
      <input type="number" min="1" class="form-control" v-bind:class="{ invalid: $v.isbnNumber.$error }" v-on:blur="$v.isbnNumber.$touch()" v-model="isbnNumber" />
      <p class="text-danger" v-if="$v.isbnNumber.$error && !$v.isbnNumber.required">The isbn number field is required.</p>
      <p class="text-danger" v-if="!$v.isbnNumber.maxLength">The isbn number can be at most {{ $v.isbnNumber.$params.maxLength.max}} symbols length.</p>
    </div>

    <slot name="submit-btn"></slot>
  </form>
</template>

<script>
import books from "../../queries/books";
import { required, maxLength } from 'vuelidate/lib/validators'

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
  validations: {
    title: {
      required
    },
    author: {
      required
    },
    description: {
      required,
      maxLength: maxLength(100)
    },
    isbnNumber: {
      required,
      maxLength: maxLength(10)
    }
  },
  methods: {
    submit: function() {
        var bookId = this.$route.params.id;
        var idToken = this.$store.getters.idToken;

        if (this.$v.$invalid) {
          return;
        }

        if (this.isEdit) {
            this.onSubmit(bookId, this.title, this.author, this.description, this.isbnNumber, idToken);
        } else {
            this.onSubmit(this.title, this.author, this.description, this.isbnNumber, idToken);
        }
    }
  },
  mounted: function() {
    var self = this;

    if (this.isEdit) {
      var bookId = self.$route.params.id;
      var idToken = this.$store.getters.idToken;

      books.getById(bookId, idToken)
      .then(function(response) {
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