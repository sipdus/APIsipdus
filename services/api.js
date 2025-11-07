import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-sipdus-6f585fkxb-giovanas-projects-936114ef.vercel.app',
  timeout: 5000,
});

export default api;
