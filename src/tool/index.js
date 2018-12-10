/*
 * @Author: hzq
 * @Date: 2018-08-28 17:18:05
 * @Last Modified by: hzq
 * @Last Modified time: 2018-12-10 10:33:48
 * @文件说明: 全局$tool插件
 */
import validator from './validator'
export default {
    install(Vue) {
        let tool = { ...validator }
        Vue.prototype.$tool = tool
        Vue.$tool = tool

        const prefix = 'scene_'
        Vue.prototype.$getItem = key => {
            return JSON.parse(window.sessionStorage.getItem(prefix + key))
        }
        Vue.prototype.$setItem = (key, data) => {
            return window.sessionStorage.setItem(
                prefix + key,
                JSON.stringify(data)
            )
        }
        Vue.prototype.$copy = obj => JSON.parse(JSON.stringify(obj))
    }
}
