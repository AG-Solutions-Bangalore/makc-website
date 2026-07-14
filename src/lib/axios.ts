import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://agsdemo.in/macapi/public/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
