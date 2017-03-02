import * as Firebase from 'firebase'

export const registerManually = (username, email, password) => {
  console.log(email + password)
  Firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    // this.successMessage = 'User account created with success'
    console.log('User account created with success')
  }, (error) => {
    // Handle Errors here.
    console.log(error)
    // this.errorCode = error.code
    // this.errorMessage = error.message
    // console.log(this.errorCode)
    // console.log(this.errorMessage)
  })
}
