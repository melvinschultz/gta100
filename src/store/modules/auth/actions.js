import * as types from './types'
import * as AuthAPI from '../../../services/firebase-api/authentication'

export default {
  [types.REGISTER_MANUALLY] ({commit, dispatch}, data) {
    return AuthAPI.registerManually(data.username, data.email, data.password)
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
