import axios from 'axios';

export const key = "444b0328a47003091012f9d6c7cfd46381dec9b4";

const api = axios.create({
    baseURL:'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization':`Bearer ${key}`
    }
})

export default api;