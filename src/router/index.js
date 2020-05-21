import Vue from 'vue'
import Router from 'vue-router'
import RouterAdmin from '../view/admin/router.vue'
import AdminRouter from './admin'
import UserRouter from './user';

Vue.use(Router)
Router.prototype.getAdminLeftRouter = function () {
    return {
        routes: this.options.routes.filter(function (item) {
            return item.path === "/";
        }).pop().children.filter(function (item) {
            return item.path === "admin";
        }).pop().children,
        basePath: "/admin"
    };
}
Router.prototype.getBlogHeaderRouter = function () {
    return {
        routes: this.options.routes.filter(function (item) {
            return item.path === "/";
        }).pop().children.filter(function (item) {
            return ["user", "admin"].indexOf(item.path) !== -1
        }),
        basePath: "/"
    };
}
export default new Router({
    routes: [
        {
            path: "/",
            component: () => import('@/view/Layout'),
            redirect: '/user',
            children: [
                {
                    path: 'admin',
                    name: '后台管理',
                    component: RouterAdmin,
                    redirect: '/admin/home',
                    children: [
                        ...AdminRouter,
                    ]
                }, {
                    path: 'user',
                    name: '我的博客',
                    component: () => import('@/view/user/router'),
                    redirect: '/user/chat',
                    children: [
                        ...UserRouter,
                    ]
                }
            ]
        }, {
            path: '/login',
            name: '登录界面',
            component: () => import('@/view/visitor/Login'),
        }
    ]
});


