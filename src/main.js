import Vue from 'vue'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css'
import App from './App.vue'
import router from './router/index'
import store from '@/vuex'

Vue.config.productionTip = false
Vue.use(ElementUI, {locale})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
