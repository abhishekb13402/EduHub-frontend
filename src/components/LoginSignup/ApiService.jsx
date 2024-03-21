// apiService.js

import axios from 'axios';
import AuthService from './AuthService';

const apiService = axios.create({
  baseURL: BASE_URL, // Assuming BASE_URL is defined or imported from a global config
  headers: {
    'Content-Type': 'application/json',
  },
});

apiService.interceptors.request.use(
  (config) => {
    const token = AuthService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiService;
