/*
 * @Author: hzq
 * @Date: 2018-08-28 15:55:55
 * @Last Modified by: hzq
 * @Last Modified time: 2018-12-10 10:23:52
 * @文件说明: 全局$api插件
 */
import Url from './url'
import Service from './service'
export default {
    install(Vue) {
        let api = {}
        Url.map(u => {
            let methods = u.methods || 'post'
            api[u.name] = (data, headers = {}) => {
                let params = data || {}
                if (methods === 'get') params = { params }
                return Service[methods]('/web' + u.url, params, { headers })
            }
        })
        Vue.prototype.$api = api
        Vue.$api = api
    }
}
