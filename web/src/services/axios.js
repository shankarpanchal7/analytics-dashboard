// apiHelper.js
import axios from 'axios';

const baseURL = 'http://localhost:4000'; // Replace with your API base URL

const api = axios.create({
  baseURL,
});

// Interceptors for request and response
api.interceptors.request.use(
  (config) => {
    const yourAuthToken = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${yourAuthToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      console.error('1 Response error:', alert(error.response.data?.error));
    } else if (error.request) {
      console.error('2 Request error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
