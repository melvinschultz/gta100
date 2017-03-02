<template>
  <div class="AuthenticationPage">
    <form-login></form-login>
    <form-register></form-register>
  </div>
</template>

<script>
  import FormLogin from './FormLogin.vue'
  import FormRegister from './FormRegister.vue'

  export default {
    name: 'AuthenticationPage',
    components: {
      FormLogin,
      FormRegister
    },
    data () {
      return {
        signUp: true
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
