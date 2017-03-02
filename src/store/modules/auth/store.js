import * as types from './types'
import actions from './actions'

const state = {
  connected: false
}

const mutations = {
  [types.SET_LOGGED_IN] (state) {
    state.connected = true
  },
  [types.SET_LOGGED_OUT] (state) {
    state.connected = false
  }
}

export default {
  state,
  mutations,
  actions
}
