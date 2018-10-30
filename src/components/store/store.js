var store = {
  state: {
    msg: 'string'
  },
  obj: 'va',
  setMessageAction: function (newValue) {
    this.state.msg = newValue
  },
  clearMessageAction () {
    this.state.msg = ''
  }
}
export default {store}
