export default [
    {
        path: 'home',
        name: 'adminHome',
        icon: "fa fa-user",
        component: () => import('@/view/admin/home'),
    }, {
        path: 'user-list',
        name: 'userList',
        icon: "fa fa-list-alt",
        component: () => import('@/view/admin/UserList'),
    }
]
