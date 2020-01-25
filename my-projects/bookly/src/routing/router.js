import VueRouter from "vue-router"
import Home from '../components/Home'
import CreateBook from '../components/books/CreateBook'

export const router = new VueRouter({
    routes: [
        { path: '', component: Home },
        { path: '/books/create', component: CreateBook }
      ],
      mode: "history"
})