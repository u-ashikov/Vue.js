import VueRouter from "vue-router"

import Home from '../components/Home'
import CreateBook from '../components/books/CreateBook'
import EditBook from '../components/books/EditBook'
import ListBooks from '../components/books/ListBooks'
import Details from '../components/books/Details'
import Register from '../components/users/Register'
import Login from '../components/users/Login'

import { store } from '../store/store'

var router = new VueRouter({
    routes: [
        { path: '', component: Home },
        { path: '/books/all', component: ListBooks },
        { path: '/books/create', component: CreateBook },
        { path: '/books/details/:id', name: 'details', component: Details },
        { path: '/books/edit/:id', name: 'edit', component: EditBook },
        { path: '/users/register', name: 'register', component: Register },
        { path: '/users/login', name: 'login', component: Login }
      ],
      mode: "history"
});

router.beforeEach(function (to, from, next) {
    var isAuthenticated = store.getters.isAuthenticated;

    if (!isAuthenticated 
        && to.path != '/users/login' 
        && to.path != '/users/register' 
        && to.path != '/') {
        next({ name: 'login'});
    } else {
        next();
    }
});

export { router }