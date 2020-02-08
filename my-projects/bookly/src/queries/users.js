import axios from 'axios'

var axiosInstance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com'
})

function register(email, password) {
    return axiosInstance.post('/v1/accounts:signUp?key=AIzaSyBYveRqdiAYd1CjrtvNpXblNnqSZDEj5qE', { email, password, returnSecureToken: true });
}

function login(email, password) {
    return axiosInstance.post('/v1/accounts:signInWithPassword?key=AIzaSyBYveRqdiAYd1CjrtvNpXblNnqSZDEj5qE', { email, password, returnSecureToken: true });
}

function save(username, email, password, idToken) {
    return axiosInstance.post('https://books-b6a94.firebaseio.com/Users.json' + "?auth=" + idToken, { username, email, password, returnSecureToken: true });
}

function getById(idToken) {
    return axiosInstance.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBYveRqdiAYd1CjrtvNpXblNnqSZDEj5qE', { idToken, returnSecureToken: true });
}

function getByUsername(username) {
    return axiosInstance.get('https://books-b6a94.firebaseio.com/Users.json?orderBy="username"&equalTo="' + username + '"');
}

function getByEmail(email) {
    return axiosInstance.get('https://books-b6a94.firebaseio.com/Users.json?orderBy="email"&equalTo="' + email + '"');
}

export default {
    register,
    login,
    save,
    getById,
    getByUsername,
    getByEmail
}