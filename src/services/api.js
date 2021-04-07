import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://192.168.1.9:3333',
    baseURL: 'https://www.mgdeliverybr.xyz',
});

export default api;
