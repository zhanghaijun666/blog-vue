import Mock from 'mockjs'

Mock.setup({
    timeout: 400
})
const Random = Mock.Random
let userList = [];
for (let i = 0; i < 56; i++) {
    userList.push({
        id: Random.id(),
        userName: Random.first(),
        password: '123',
        nickname: Random.cname(),
        email: Random.email(),
        birthday: Random.date(),
        motto: Random.csentence()
    })
}
Mock.mock('/api/user/all', "get", userList);
let fileList = [];
for (let i = 0; i < 66; i++) {
    fileList.push({
        id: Random.id(),
        name: Random.ctitle(3, 8),
        size: '20MB',
        createAt: Random.cname(),
        updateTime: Random.time('yyyy-MM-dd HH:mm:ss')
    })
}
Mock.mock('/api/file', "get", fileList);

