import axios from 'axios'

var axiosInstance = axios.create({
    baseURL: 'https://books-b6a94.firebaseio.com'
});

function create(title, author, description, isbnNumber, idToken) {
    return axiosInstance.post('/Books.json?auth=' + idToken, { author, title, description, isbnNumber });
}

function edit(id, title, author, description, isbnNumber, idToken) {
    return axiosInstance.put('/Books/' + id + '.json?auth=' + idToken, { author, title, description, isbnNumber });
}

function getAll(idToken) {
    return axiosInstance.get('/Books.json?auth=' + idToken);
}

function getById(id, idToken) {
    return axiosInstance.get('/Books/' + id + '.json?auth=' + idToken);
}

function deleteById(id, idToken) {
    return axiosInstance.delete('/Books/' + id + '.json?auth=' + idToken);
}

export default {
    create,
    edit,
    getAll,
    getById,
    deleteById
}