import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rightish-cletus-femoral.ngrok-free.dev/api',
  timeout: 5000,
});

export default api;
