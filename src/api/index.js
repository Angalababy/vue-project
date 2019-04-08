import ajax from './ajax'
// 1. 定义 模拟数据 路由接口接口 - ajax("/mock/home")  会得到 {code:0, data: homeData}
export const getCategory=()=> ajax('/mock/category')
export const getHome=()=>ajax('/mock/home')
export const getSearch=()=>ajax('/api/xhr/search/init.json')
export const getGeneralTabs=()=>ajax('/api/topic/v1/find/getTabs.json')
export const getRecManual=()=>ajax('/api/topic/v1/find/recManual.json')
