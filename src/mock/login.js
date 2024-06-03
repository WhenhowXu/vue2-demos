const MockJS = require('mockjs');

MockJS.mock('/api/login', 'post', (req, res) => {
    const { username, password } = JSON.parse(req.body);
    if (username && password) {
        return {
            code: 0,
            message: '登录成功',
            data: {
                token: `token-${username}`,
                username,
            }
        }
    } else {
        return {
            code: -1,
            message: '用户名或密码错误',
            data: null
        }
    }
})