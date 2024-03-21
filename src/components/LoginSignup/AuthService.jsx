// AuthService.js

import axios from 'axios';

const BASE_URL = 'https://localhost:7244/api/RegisterUser'; // Replace with your API base URL

const AuthService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      return token;
    } catch (error) {
      throw new Error(error.response.data.message || 'Login failed');
    }
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getToken: () => {
    return localStorage.getItem('token');
  },

  isLoggedIn: () => {
    return !!localStorage.getItem('token');
  },
};

export default AuthService;
