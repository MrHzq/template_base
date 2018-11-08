/*
 * @Author: hzq
 * @Date: 2018-08-28 16:05:27
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-17 14:53:24
 * @文件说明: 请求配置
 */
import axios from 'axios';
import apiError from './apiError';
// 创建实例时设置配置的默认值
const Service = axios.create({
    timeout: 1000 * 6, // 6秒超时
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
});
// 添加请求拦截器
Service.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
Service.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        return response.body;
    },
    error => {
        // 对响应错误做点什么
        if (error) {
            apiError(error);
            return Promise.reject(error.response.data);
        }
    }
);
export default Service;
