<template>
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
export default {
  name: 'FormRegister',
  data () {
    return {
      form: {
        username: '',
        usernameErrorMessage: null,
        email: '',
        emailErrorMessage: null,
        password: '',
        passwordErrorMessage: null
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch(SIGN_UP_MANUALLY, {
        username: this.form.username,
        email: this.form.email,
        password: this.form.password
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
