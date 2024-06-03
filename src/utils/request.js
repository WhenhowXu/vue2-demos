import axios from 'axios';
import { message } from 'ant-design-vue';
import { ACCESS_TOKEN } from '@/constants/storage';

const request = axios.create({
    baseURL: '/',
    timeout: 60000
});
// 异常拦截处理器
const errorHandler = error => {
    if (error.response) {
        const data = error.response.data;
        if (error.response.status === 403) {
            message.error(data.message);
        }
        if (error.response.status === 401) {
            message.error('授权失败，请重新登录');
            logout();
        }
        if (error.response.status === 404) {
            message.error(data.message || '请求地址不存在');
        }
        if (/^50/.test(error.response.status)) {
            message.error('服务异常');
        }
    }
    return Promise.reject(error);
};

request.interceptors.request.use(config => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
        config.headers.auth = token || '';
    }
    return config;
}, errorHandler);

request.interceptors.response.use(response => {
    let { data = {} } = response;
    const { code, message } = data;
    if (code === 0) {
        return data;
    } else if (code === 401) {
        message.error('登录信息已失效，请重新登录！')
        return Promise.reject()
    } else if (code === -1) {
        message.error(message || '请求失败')
    } else {
        return data
    }
}, errorHandler);

export default request;
