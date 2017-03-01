<template>
  <div class="authentication" v-if="account">
    <!--<h1>Login</h1>-->
    <div class="row">
      <p class="red-text text-darken-2" v-if="errorMessage != ''">{{ errorMessage }}</p>
      <form class="col s12">
        <div class="row">
          <div class="input-field col s10 offset-s1">
            <input v-model="email" id="email" type="email" class="validate">
            <label for="email">Email</label>
          </div>
          <div class="input-field col s10 offset-s1">
            <input v-model="password" id="password" type="password" class="validate">
            <label for="password">Password</label>
          </div>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col s10 offset-s1">
        <button @click="login" class="btn btn-large waves-effect waves-light green darken-3" name="action">Login
          <!--<i class="material-icons right">send</i>-->
        </button>
      </div>
    </div>
    <p @click="account = !account">Do not have an account ? Register me now</p>
  </div>

  <div class="authentication" v-else>
    <!--<h1>Register</h1>-->
    <div class="row">
      <p class="red-text text-darken-2" v-if="errorMessage != ''">{{ errorMessage }}</p>
      <p class="green-text text-darken-2" v-if="successMessage != ''">{{ successMessage }}</p>
      <form class="col s12">
        <div class="row">
          <div class="input-field col s10 offset-s1">
            <input v-model="username" id="username" type="text" class="validate">
            <label for="username">Username</label>
          </div>
          <div class="input-field col s10 offset-s1">
            <input v-model="email" id="email" type="email" class="validate">
            <label for="email">Email</label>
          </div>
          <div class="input-field col s10 offset-s1">
            <input v-model="password" id="password" type="password" class="validate">
            <label for="password">Password</label>
          </div>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col s10 offset-s1">
        <button @click="register" class="btn btn-large waves-effect waves-light green darken-3" name="action">Register
          <!--<i class="material-icons right">send</i>-->
        </button>
      </div>
    </div>
    <p @click="account = !account">Already registered. Login me</p>
  </div>
</template>

<script>
  import * as Firebase from 'firebase'
  export default {
    name: 'auth',
    data () {
      return {
        username: '',
        email: '',
        password: '',
        errorCode: '',
        errorMessage: '',
        account: true,
        isUser: false
      }
    },
    methods: {
      login: function () {
        console.log(this.email + this.password)
        Firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
          console.log('User is logged in')
          this.$router.push('/home')
        }, (error) => {
          // Handle Errors here.
          this.errorCode = error.code
          this.errorMessage = error.message
//          console.log(this.errorCode)
//          console.log(this.errorMessage)
        })
//        this.isSignedIn()
      },
      register: function () {
        console.log(this.email + this.password)
        Firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
          this.successMessage = 'User account created with success'
          console.log('User account created with success')
        }, (error) => {
          // Handle Errors here.
          this.errorCode = error.code
          this.errorMessage = error.message
          console.log(this.errorCode)
          console.log(this.errorMessage)
        })
      },
      isSignedIn: function () {
        Firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log(user)
            console.log('User is signed in.')

            user.providerData.forEach(function (profile) {
              console.log('Sign-in provider: ' + profile.providerId)
              console.log('  Provider-specific UID: ' + profile.uid)
              console.log('  Name: ' + profile.displayName)
              console.log('  Email: ' + profile.email)
              console.log('  Photo URL: ' + profile.photoURL)
            })
            this.isUser = true
          } else {
            console.log(user)
            console.log('No user is signed in.')
            this.isUser = false
          }
        })
        return this.isUser
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #2E7D32;
}
.btn-large {
  width: 100%;
}
</style>
