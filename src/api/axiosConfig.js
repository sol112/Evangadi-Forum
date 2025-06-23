import axios from 'axios';

const axiosBase = axios.create({
   
baseURL: 'https://evangadiforum-last.onrender.com/api',
});

export default axiosBase;
