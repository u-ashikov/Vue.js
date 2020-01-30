import VueRouter from "vue-router"
import Home from '../components/Home'
import CreateBook from '../components/books/CreateBook'
import ListBooks from '../components/books/ListBooks'
import Details from '../components/books/Details'

export const router = new VueRouter({
    routes: [
        { path: '', component: Home },
        { path: '/books/all', component: ListBooks },
        { path: '/books/create', component: CreateBook },
        { path: '/books/details/:id', name: 'details', component: Details }
      ],
      mode: "history"
})