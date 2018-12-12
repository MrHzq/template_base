import Vue from 'vue'
import hzqAxios from 'hzq-axios'
import App from './App'
import router from './router'
import store from './store'
import tool from './tool'
import Url from './apiUrl'

Vue.use(tool)
Vue.use(hzqAxios, Url, {
    baseURL: 'https://open-api.beone.app',
    preURL: 'https://api-t.xkt.one',
    prodURL: 'https://api.dzqqsc.com'
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
