import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import hzqTool from 'hzq-tool'
import hzqAxios from 'hzq-axios'
import './components/global'
Vue.use(hzqTool)

let apiUrl = []
const RC = require.context('@/apiUrl', true, /\.js$/)
RC.keys().map(fileName => {
    let prefix = ''
    if (fileName.match(/\//g).length > 1) {
        // 如果长度大于1，则表明访问接口是需要前缀的，则自动获取到前缀并地址中加上
        prefix = '/' + fileName.split(/\//g)[1]
    }

    let arr = RC(fileName).default.map(u => {
        u.url = prefix + u.url
        return u
    })
    apiUrl.push(...arr)
})
Vue.use(hzqAxios, apiUrl, {
    baseURL: 'https://open-api.beone.app'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
