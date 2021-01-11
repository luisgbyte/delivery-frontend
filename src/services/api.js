import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3333',
    baseURL: 'http://167.99.7.135',
});

export default api;
