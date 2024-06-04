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

MockJS.mock('/api/menus', 'get', (req, res) => {
    return {
        code: 0,
        data: [
            {
                path: '/dashboard',
                template: 'dashboard/index',
                title: '首页',
                icon: 'board',
                hideInSide: false,
                hideInTabs: false,
            },
            {
                path: '/demos',
                template: 'dashboard/index',
                title: '示例',
                icon: 'user',
                hideInSide: false,
                hideInTabs: false,
            },
        ],
        message: '请求成功'
    }
})