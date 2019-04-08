import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import general from './modules/general'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules:{
    general
  }
})
