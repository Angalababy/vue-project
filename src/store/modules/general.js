//引入api
import {getGeneralTabs,getRecManual} from '../../api'

//定义一个常量 这样就会有提示
const REQUEST_GENAERALTABS='request_genaeraltabs'
const REQUEST_RECMANUAL='request_recmanual'

const state ={
  generalTabs:[],
  recManual:[]
}
//包含多个直接改变状态数据方法的对象
const mutations={
  [REQUEST_GENAERALTABS](state,data){
    state.generalTabs=data
  },
  [REQUEST_RECMANUAL](state,data){
    state.recManual=data
  }
}
//包含多个间接改变状态数据方法的对象
const actions={
  async getGeneralTabs({commit}){
    const result=await getGeneralTabs()
    commit(REQUEST_GENAERALTABS,result.data)
  },
  async getRecManual({commit}){
    const result =await getRecManual()
    commit(REQUEST_RECMANUAL,result.data)
  }
}



const getters={

}

export default {
  state,
  actions,
  mutations,
  getters
}
