import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css'
import App from './App.vue'
import router from './router/index'
import store from '@/common/vuex'
import Service from '@/common/axios/api.js'
import i18n from './common/i18n/i18n';

require('./common/mock/index.js');
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$axios = Service;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
