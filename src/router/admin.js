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
    }
]
