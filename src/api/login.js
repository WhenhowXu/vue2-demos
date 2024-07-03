import axios from '@/utils/request'

// 登录
export const login = (data) => axios.post('/login', data)
