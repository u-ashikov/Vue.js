<template>
    <div class="row">
        <h1 class="col-12 my-3">All books</h1>
        <app-book 
            v-for="book in books" 
            v-bind:key="book.id" 
            v-bind:id="book.id" 
            v-bind:title="book.title" 
            v-bind:author="book.author">
        </app-book>
    </div>
</template>

<script>
import books from '../../queries/books'
import Book from './Book'
import {store} from '../../store/store'

export default {
    data: function () {
        return {
            books: []
        }
    },
    components: {
        appBook: Book
    },
    created: function () {
        books.getAll(store.getters.idToken)
        .then(response => {
            var allBooks = [];

            for (var key of Object.keys(response.data)) {
                var book = {
                    id: key,
                    title: response.data[key].title,
                    author: response.data[key].author
                }

                allBooks.push(book);
            }

            this.books = allBooks;
        });
    }
}
</script>