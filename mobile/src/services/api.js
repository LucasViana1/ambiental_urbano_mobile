import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.14.236:9999', //usando ip local da maquina atual
});

export default api;
