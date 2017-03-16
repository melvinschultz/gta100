<template>
  <div class="authentication">
    <img src="../../assets/logo1.png" alt="logo">
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="errors" v-for="error in errors">
            <p class="red-text center">{{ error }}</p>
          </div>

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
      <button @click.prevent="login" class="btn waves-effect waves-light green darken-3" name="action">Se connecter</button>
    </div>
    <div class="row">
      <router-link to="register" class="white-text">Pas encore de compte ? S'incrire</router-link>
    </div>
    <div class="row btn-facebook">
      <button class="btn disabled waves-effect waves-light blue darken-3" name="action">Se connecter via facebook</button>
      <p class="grey-text text-darken-3">* La connexion via Facebook n'est pas encore disponible</p>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: '',
        errors: [],
        usersRef: firebase.database().ref('users')
      }
    },
    methods: {
      login () {
        this.errors = []
        if (this.isFormValid()) {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
            console.log(user)
            this.$store.dispatch('setUser', user)
            this.usersRef.child(user.uid).once('value').then((snapshot) => {
//              console.log(snapshot.val().theme)
              this.$store.dispatch('setUserTheme', snapshot.val().theme)
            })
            this.$router.push('/favorite-perso')
          }).catch(error => {
            console.log(error)
            this.errors.push(error.message)
          })
        }
      },
      isEmpty () {
        if (this.email.length === 0 || this.password.length === 0) {
          return true
        }
        return false
      },
      passwordValid () {
        if (this.password.length < 6) {
          return false
        }
        return true
      },
      isFormValid () {
        if (this.isEmpty()) {
          this.errors.push('Veuillez remplir tous les champs')
          return false
        }
        if (!this.passwordValid()) {
          this.errors.push('Email ou password incorrect')
          return false
        }
        return true
      }
    }
  }
</script>

<style scoped>
  .btn-facebook {
    margin-top: 20%;
  }
</style>
