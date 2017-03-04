<template>
  <div class="FormLogin">
    <!--<h1>Login</h1>-->
    <div class="row">
      <!--<p class="red-text text-darken-2" v-if="errorMessage != ''">{{ errorMessage }}</p>-->
      <form class="col s12">
        <div class="row">
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
        <button @click.prevent="handleSubmit" class="btn btn-large waves-effect waves-light green darken-3" name="action">Login
          <!--<i class="material-icons right">send</i>-->
        </button>
      </div>
    </div>
    <p @click="isNotSignedUp">Do not have an account ? Register me now</p>
  </div>
</template>

<script>
  import { LOG_IN_FROM_CREDENTIALS } from '../../store/modules/auth/types'

  export default {
    name: 'FormLogin',
    data () {
      return {
        form: {
          email: '',
          emailErrorMessage: null,
          password: '',
          passwordErrorMessage: null
        }
      }
    },
    methods: {
      isNotSignedUp () {
        this.$emit('isNotSignedUp')
      },
      handleSubmit () {
        this.$store.dispatch(LOG_IN_FROM_CREDENTIALS, {
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
