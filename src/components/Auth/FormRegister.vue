<template>
  <div class="FormRegister">
    <!--<h1>Register</h1>-->
    <div class="row">
      <p class="red-text text-darken-2" v-if="errorMessage != ''">{{ errorMessage }}</p>
      <p class="green-text text-darken-2" v-if="successMessage != ''">{{ successMessage }}</p>
      <form class="col s12">
        <div class="row">
          <div class="input-field col s10 offset-s1">
            <input v-model="form.username" id="username" type="text" class="validate">
            <label for="username">Username</label>
          </div>
          <div class="input-field col s10 offset-s1">
            <input v-model="form.email" id="email" type="email" class="validate">
            <label for="email">Email</label>
          </div>
          <div class="input-field col s10 offset-s1">
            <input v-model="form.password" id="password" type="password" class="validate">
            <label for="password">Password</label>
          </div>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col s10 offset-s1">
        <button @click.prevent="handleSubmit" class="btn btn-large waves-effect waves-light green darken-3" name="action" type="submit">Register
          <!--<i class="material-icons right">send</i>-->
        </button>
      </div>
    </div>
    <p @click="isSignedUp">Already registered. Login me</p>
  </div>
</template>

<script>
  import { REGISTER_MANUALLY } from '../../store/modules/auth/types'

  export default {
    name: 'FormRegister',
    props: {
      signUp: {
        type: Boolean,
        required: true
      }
    },
    data () {
      return {
        form: {
          username: '',
          usernameErrorMessage: null,
          email: '',
          emailErrorMessage: null,
          password: '',
          passwordErrorMessage: null,
          successMessage: null,
          errorMessage: null,
          errorCode: ''
        }
      }
    },
    methods: {
      isSignedUp () {
        this.signUp = !this.signUp
        this.$emit('isSignedUp')
      },
      handleSubmit () {
        this.$store.dispatch(REGISTER_MANUALLY, {
          username: this.form.username,
          email: this.form.email,
          password: this.form.password
        })
      }
//      register () {
//        console.log('Register')
//        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
//          this.successMessage = 'User account created with success'
//          console.log('User account created with success')
//        }, (error) => {
//           Handle Errors here.
//          this.errorCode = error.code
//          this.errorMessage = error.message
//          console.log(this.errorCode)
//          console.log(this.errorMessage)
//        })
//      }
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
