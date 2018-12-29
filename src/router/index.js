import Vue from 'vue'
import Router from 'vue-router'
import hzqRouter from 'hzq-router'
Vue.use(Router)

let routes = {}
// 找到routes文件夹下以.js命名的路由数据文件
const RC = require.context('./routes', true, /\.js$/)
RC.keys().map(fileName => {
    let fn = fileName.substr(2).split('.js')[0]
    let key = fn === 'root' ? '/' : fn
    routes[key] = RC(fileName).default
})
routes = hzqRouter(routes)
routes.unshift({ path: '/', redirect: '/test' })

export default new Router({ routes })
