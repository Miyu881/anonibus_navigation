import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-anonibus-b0657.cloudfunctions.net/'
});

export default api;
