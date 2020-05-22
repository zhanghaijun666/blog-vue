import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css'
import App from './App.vue'
import router from './router/index'
import store from '@/vuex'
import Service from '@/axios/api.js'
import i18n from './i18n/i18n';

require('./mock/index.js');
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$axios = Service;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
