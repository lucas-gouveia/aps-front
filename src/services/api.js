import axios from 'axios';

const api = axios.create({
  baseURL: 'https://c955-2804-14d-3281-904d-f0ba-1d93-f24b-5da8.ngrok.io/',
})

export default api;