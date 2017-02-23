<template>
  <div class="authentication" v-if="account">
    <h1>Sign In</h1>
    <div class="row">
      <p class="red-text text-darken-3">{{ errorMessage }}</p>
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
    <button @click="signIn" class="btn waves-effect waves-light" name="action">Sign In
      <i class="material-icons right">send</i>
    </button>
    <p @click="account = !account">Vous n'avez pas encore de compte ?</p>
  </div>

  <div class="authentication" v-else>
    <h1>Sign Up</h1>
    <div class="row">
      <p class="red-text text-darken-3">{{ errorMessage }}</p>
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
    <button @click="signUp" class="btn waves-effect waves-light" name="action">Sign Up
      <i class="material-icons right">send</i>
    </button>
    <p @click="account = !account">Vous avez déjà un compte ?</p>
  </div>
</template>

<script>
  import * as Firebase from 'firebase'
  export default {
    name: 'auth',
    data () {
      return {
        email: '',
        password: '',
        errorCode: '',
        errorMessage: '',
        account: true
      }
    },
    methods: {
      signIn: function () {
        console.log(this.email + this.password)
        Firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch((error) => {
          // Handle Errors here.
          this.errorCode = error.code
          this.errorMessage = error.message
          // ...
        })
        this.isSignedIn()
      },
      signUp: function () {
        console.log(this.email + this.password)
        Firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch((error) => {
          // Handle Errors here.
          this.errorCode = error.code
          this.errorMessage = error.message
          // ...
        })
        console.log('User account created with success.')
      },
      isSignedIn: function () {
        Firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log(user)
            console.log('User is signed in.')
          } else {
            console.log(user)
            console.log('No user is signed in.')
          }
        })
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
  color: #42b983;
}
</style>
