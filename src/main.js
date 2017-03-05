// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import VueFire from 'vuefire'
import Materials from 'vue-material'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueFire)
Vue.use(Materials)

let config = {
  apiKey: 'AIzaSyBR8zL0Tiep2935n5lfT1x-9T6wWahiyKM',
  authDomain: 'gta100-d0537.firebaseapp.com',
  databaseURL: 'https://gta100-d0537.firebaseio.com',
  storageBucket: 'gta100-d0537.appspot.com',
  messagingSenderId: '483960769224'
}
firebase.initializeApp(config)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/auth',
      component: require('./components/pages/Auth.vue')
    },
    {
      path: '/login',
      component: require('./components/pages/Login.vue')
    },
    {
      path: '/register',
      component: require('./components/pages/Register.vue')
    },
    {
      path: '/home',
      component: require('./components/pages/Home.vue')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
