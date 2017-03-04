import * as Firebase from 'firebase'
import * as types from '../../store/modules/auth/types'

export const registerManually = ({commit}, username, email, password) => {
  // console.log(email + password)
  Firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    // this.successMessage = 'User account created with success'
    console.log('User account created with success')
    commit(types.SET_LOGGED_IN)
  }, (error) => {
    // Handle Errors here.
    console.log(error)
    commit(types.SET_LOGGED_OUT)
    // this.errorCode = error.code
    // this.errorMessage = error.message
    // console.log(this.errorCode)
    // console.log(this.errorMessage)
  })
}

export const loginFromCredentials = ({commit}, email, password) => {
  console.log(email + password)
  Firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    console.log('User is logged in')
    // this.$router.push('/home')
    commit(types.SET_LOGGED_IN)
  }, (error) => {
    // Handle Errors here.
    console.log(error)
    commit(types.SET_LOGGED_OUT)
    // this.errorCode = error.code
    // this.errorMessage = error.message
    // console.log(this.errorCode)
    // console.log(this.errorMessage)
  })
}
