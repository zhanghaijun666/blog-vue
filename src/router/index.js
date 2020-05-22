import Vue from 'vue'
import Router from 'vue-router'
import RouterAdmin from '../view/admin/router.vue'
import AdminRouter from './admin'
import UserRouter from './user';
import NProgress from "nprogress";
import 'nprogress/nprogress.css'

NProgress.configure({
    easing: 'ease',
    speed: 500,
    showSpinner: false,
    trickleSpeed: 200,
    minimum: 0.3
})
Vue.use(Router)

Router.prototype.getChildren = function (basePath, routes) {
    basePath = basePath || "";
    routes = routes || this.options.routes;
    if (!(routes instanceof Array) || routes.length === 0) {
        return [];
    }
    const array = basePath.split("/");
    let pathName = array.shift();
    let routerArray = [];
    if ((/[^/]+/.test(pathName))) {
        const similarRoute = routes.filter(function (item) {
            return ["/" + pathName, pathName].indexOf(item.path) != -1;
        }).shift();
        routerArray = (similarRoute && similarRoute.children instanceof Array ? similarRoute.children : []);
    } else {
        const rootRoute = routes.filter(function (item) {
            return !(/[^/]+/.test(item.path));
        }).shift();
        routerArray = (rootRoute && rootRoute.children instanceof Array ? rootRoute.children : []).concat(
            this.options.routes.filter(function (item) {
                return !!(/[^/]+/.test(item.path));
            })
        );
    }
    if (!(routerArray instanceof Array)) {
        return [];
    }
    return array.length == 0 ? routerArray : this.getChildren(array.join("/"), routerArray);
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
const BlogRouter = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: () => import('@/view/Layout'),
            redirect: '/user',
            children: [
                {
                    path: 'admin',
                    name: 'admin',
                    component: RouterAdmin,
                    redirect: '/admin/home',
                    children: [
                        ...AdminRouter,
                    ]
                }, {
                    path: 'user',
                    name: 'myBlog',
                    component: () => import('@/view/user/router'),
                    redirect: '/user/home',
                    children: [
                        ...UserRouter,
                    ]
                }
            ]
        }, {
            path: '/login',
            name: 'login',
            component: () => import('@/view/visitor/Login'),
        }
    ]
});
BlogRouter.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});
BlogRouter.afterEach(() => {
    NProgress.done()
})
export default BlogRouter;

