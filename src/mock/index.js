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
Mock.mock('/api/file', "get", userList);

