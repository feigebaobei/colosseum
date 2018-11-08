const actions = {
  addAge: ({commit}, payload) => {
    commit('addAge', payload)
  },
  modifyName: ({commit}, payload) => {
    commit('modifyName', payload)
  }
}
export default actions
