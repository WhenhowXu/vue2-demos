import axios from '@/utils/request';
// 获取菜单
export const getMenus = () => axios.get('/api/menus')