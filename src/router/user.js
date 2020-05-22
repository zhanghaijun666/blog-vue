export default [
    {
        path: 'home',
        name: 'userHome',
        icon: "fa fa-home",
        component: () => import('@/view/user/home'),
    }, {
        path: 'file',
        name: 'userFile',
        icon: "fa fa-book",
        component: () => import('@/view/user/file'),
    }, {
        path: 'chat',
        name: 'chat',
        icon: "fa fa-user",
        component: () => import('@/view/user/chat'),
    }
]
