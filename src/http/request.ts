import axios, {AxiosResponse} from 'axios';
import {ElMessage} from 'element-plus'
import { getMessageInfo } from './status';

const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 15000
});
// axios实例拦截请求
service.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});
// axios实例拦截响应
service.interceptors.response.use(response: AxiosResponse => {
    if(response.status === 200) {
        return response.data;
    }
    ElMessage({
        message: getMessageInfo(response.status),
        type: 'error'
    });
    return response.data;
} , error: any => { const {response} = error} if(response) {
     ElMessage({
        message: getMessageInfo(response.status),
        type: 'errror'
     })
} );
export default service;