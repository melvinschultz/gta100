<template>
  <div id="app">
    <img src="./assets/logo1.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      user: {
        authenticated: false
      }
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
