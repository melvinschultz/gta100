import * as types from './types'
import * as AuthAPI from '../../../services/firebase-api/authentication'

export default {
  [types.REGISTER_MANUALLY] ({commit, dispatch}, data) {
    console.log(data)
    return AuthAPI.registerManually(data.username, data.email, data.password)
      .then(res => {
        console.log(res)
        commit(types.SET_LOGGED_IN)
      })
      .catch((err) => {
        console.log(err)
        commit(types.SET_LOGGED_OUT)
      })
  },
  [types.LOGIN_MANUALLY] ({commit, dispatch}, data) {
    console.log(data)
    return AuthAPI.loginManually(data.email, data.password)
      .then(res => {
        console.log(res)
        commit(types.SET_LOGGED_IN)
      })
      .catch((err) => {
        console.log(err)
        commit(types.SET_LOGGED_OUT)
      })
  }
}
