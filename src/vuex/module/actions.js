const actions = {
  addAge: ({commit}, payload) => {
    commit('addAge', payload)
  },
  modifyName: ({commit}, payload) => {
    commit('modifyName', payload)
  },
  allData: (context) => {
    console.log(context)
  }
}
export default actions
