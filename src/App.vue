<template>
  <div id="app">
    <img src="./assets/logo1.png">
    <authentication-page v-if="!isLoggedIn"></authentication-page>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import AuthenticationPage from './components/Auth/AuthenticationPage.vue'

  export default {
    name: 'app',
    components: {
      AuthenticationPage
    },
    computed: {
      isLoggedIn () {
        return this.$store.state.auth.connected
      }
    }
  }
</script>

<style>
body {
  background-color: #212121;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
</style>
