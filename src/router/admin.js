export default [
    {
        path: 'home',
        name: 'adminHome',
        icon: "el-icon-s-home",
        component: () => import('@/view/admin/home'),
    }, {
        path: 'user-list',
        name: 'userList',
        icon: "el-icon-user-solid",
        component: () => import('@/view/admin/UserList'),
    }, {
        path: "plugin",
        name: "userList",
        icon: "el-icon-platform-eleme",
        redirect: 'plugin/vue-editor',
        component: {
            template: `<router-view></router-view>`
        },
        children: [
            {
                path: 'vue-editor',
                name: 'vueEditor',
                icon: "el-icon-s-flag",
                component: () => import('@/view/visitor/VueEditor'),
            }, {
                path: 'markdown',
                name: 'markdown',
                icon: "el-icon-s-check",
                component: () => import('@/view/visitor/Markdown'),
            }
        ]
    }, {
        path: 'vue-editor',
        name: 'vueEditor',
        icon: "el-icon-s-goods",
        component: () => import('@/view/visitor/VueEditor'),
    }, {
        path: 'markdown',
        name: 'markdown',
        icon: "el-icon-s-help",
        component: () => import('@/view/visitor/Markdown'),
    }, {
        path: 'chart',
        name: 'char',
        icon: "el-icon-s-cooperation",
        component: () => import('@/view/visitor/BaseCharts'),
    }, {
        path: 'Upload',
        name: 'Upload',
        icon: "el-icon-user-solid",
        component: () => import('@/view/visitor/Upload'),
    }, {
        path: '403',
        name: '403',
        icon: "el-icon-s-promotion",
        component: () => import('@/view/visitor/403'),
    }, {
        path: '404',
        name: '404',
        icon: "el-icon-s-shop",
        component: () => import('@/view/visitor/404'),
    }
]
