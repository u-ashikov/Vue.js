import axios from 'axios'

var axiosInstance = axios.create({
    baseURL: 'https://books-b6a94.firebaseio.com'
});

function create(title, author, description, isbnNumber) {
    return axiosInstance.post('/Books.json', { author, title, description, isbnNumber });
}

function getAll() {
    return axiosInstance.get('/Books.json');
}

function deleteById(id) {
    return axiosInstance.delete('/Books/' + id + '.json');
}

export default {
    create,
    getAll,
    deleteById
}