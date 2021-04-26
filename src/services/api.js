import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.mgdeliverybr.xyz',
});

export default api;
