import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ElementLocale from 'element-ui/lib/locale';
import enElement from "element-ui/lib/locale/lang/en";
import zhElement from "element-ui/lib/locale/lang/zh-CN";
import enLocale from './en';
import zhLocale from './zh';

Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: localStorage.getItem('blog_lang') || 'zh',
    messages: {
        en: {
            ...enLocale,
            ...enElement
        },
        zh: {
            ...zhLocale,
            ...zhElement
        }
    }
});
ElementLocale.i18n((key, value) => i18n.t(key, value));

export default i18n;
