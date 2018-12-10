/*
 * @Author: hzq
 * @Date: 2018-08-28 16:05:27
 * @Last Modified by: hzq
 * @Last Modified time: 2018-12-10 10:25:18
 * @文件说明: 请求配置
 */
import axios from 'axios'

// 默认为：测试环境
let baseURL = 'https://open-api.beone.app'

if (process.env.PATH_ENV === 'prod') {
    // 正式环境
    baseURL = 'https://api.dzqqsc.com'
} else if (process.env.PATH_ENV === 'pre') {
    // 预发布环境
    baseURL = 'https://api-t.xkt.one'
}

// 创建实例时设置配置的默认值
const Service = axios.create({
    // timeout: 1000 * 6, // 6秒超时
    baseURL,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
})
// 添加请求拦截器
Service.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        return config
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

// 添加响应拦截器
Service.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        return response.data
    },
    error => {
        // 对响应错误做点什么
        if (error) {
            return Promise.reject(error.response.data)
        }
    }
)
export default Service
