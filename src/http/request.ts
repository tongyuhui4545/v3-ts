import axios from 'axios';

const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout:15000
});
service.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error);
});
service.interceptors.response.use(response => {
  return response.data;
}, error => {})
export default service;