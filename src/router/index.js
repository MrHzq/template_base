import Vue from 'vue'
import Router from 'vue-router'
import hzqRouter from 'hzq-router'
Vue.use(Router)

let routes = hzqRouter({
    rc: require.context('@/views', true, /\.vue$/),
    meta: {
        home: { add: true },
        login: { edit: true },
        'add-channel': { add: true },
        'edit-channel': { edit: true }
    },
    redirect: '/test',
    rootFile: 'views'
})
export default new Router({ routes })
