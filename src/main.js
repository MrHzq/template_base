import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import tool from './tool';
import api from './api';

Vue.use(api);
Vue.use(tool);

const prefix = 'scene_';
Vue.prototype.$getItem = key => {
    return JSON.parse(window.sessionStorage.getItem(prefix + key));
};
Vue.prototype.$setItem = (key, data) => {
    return window.sessionStorage.setItem(prefix + key, JSON.stringify(data));
};
Vue.prototype.$copy = obj => JSON.parse(JSON.stringify(obj));

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
});
