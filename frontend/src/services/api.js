import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bth-node-api.herokuapp.com/',
});

export default api;