import Vue from 'vue'
import Vuex from 'vuex'
import state from '../state.js'
import getters from '../getters.js'
import mutations from '../mutations.js'
import actions from '../actions.js'

import statetwo from './state.js'
import getterstwo from './getters.js'
import mutationstwo from './mutations.js'
import actionstwo from './actions.js'

Vue.use(Vuex)

const car = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    login: {
      namespaced: true,
      state: statetwo,
      getters: getterstwo,
      mutations: mutationstwo,
      actions: actionstwo
    },
    panl: {// 继承父模块的命名空间
      namespaced: true,
      state,
      getters,
      mutations,
      actions
    }
  }
}

// console.log('car', car)

// const login = {
//   namespaced: true,
//   statetwo,
//   getterstwo,
//   mutationstwo,
//   actionstwo
// }

export default new Vuex.Store({
  modules: {
    // login: login
    // login: Object.assign(
    //   login,
    //   {namespaced: true},
    //   modules: {
    //     first: Object.assign(
    //       first,
    //       {namespaced: true}
    //     ),
    //   }
    // )
    // login: {
    //   namespaced: true,
    //   state,
    //   getters,
    //   mutations,
    //   actions,
    //   modules: {
    //     first: {
    //       namespaced: true,
    //       state2,
    //       getters2,
    //       mutations2,
    //       actions2
    //     }
    //   }
    // }
    // first: first
    car
    // login: login,
    // modules: {
    //   first: first
    // }
  }
})
