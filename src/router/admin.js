export default [
    {
        path: 'home',
        name: '管理首页',
        icon: "fa fa-user",
        component: () => import('@/view/admin/home'),
    }, {
        path: 'user-list',
        name: '用户列表',
        icon: "fa fa-list-alt",
        component: () => import('@/view/admin/UserList'),
    }
]
