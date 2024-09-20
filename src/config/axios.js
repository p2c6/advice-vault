import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.adviceslip.com', 
    headers: {
        'Content-Type': 'application/json',
    },    
});

export default axiosInstance;
