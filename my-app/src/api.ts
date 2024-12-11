import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.neu-ojt-app.com', // Replace with your API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
