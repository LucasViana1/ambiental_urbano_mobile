import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.14.236:9999', //asus
  baseURL: 'http://10.0.0.104:9999', //dell
});

export default api;
