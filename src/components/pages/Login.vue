<template>
  <div class="authentication">
    <div class="row">
      <!--<p class="red-text text-darken-3">{{ errorMessage }}</p>-->
      <form class="col s12">
        <div class="row">
          <div class="input-field col s10 offset-s1">
            <label for="email">Email</label>
            <input id="email" type="email" class="validate" v-model.trim="email">
          </div>
          <div class="input-field col s10 offset-s1">
            <label for="password">Password</label>
            <input id="password" type="password" class="validate" v-model.trim="password">
          </div>
        </div>
      </form>
    </div>
    <div class="row">
      <button @click.prevent="login" class="btn waves-effect waves-light" name="action">Se connecter
        <!--<i class="material-icons right">send</i>-->
      </button>
    </div>
    <div class="row">
      <router-link to="register">Pas encore de compte ? S'incrire</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: ''
      }
    }
  }
</script>

<style scoped>

</style>
