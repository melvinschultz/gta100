// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import VueFire from 'vuefire'
import Materials from 'vue-material'
import store from './store'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)
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

window.firebase = firebase
// let app = Firebase.initializeApp(config)
// let db = app.database()
//
// let someRef = db.ref('ref')

// let database = Firebase.database()

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/auth',
      component: require('./components/Auth/AuthenticationPage.vue'),
      name: 'Auth'
    },
    {
      path: '/home',
      component: require('./components/pages/Home.vue'),
      name: 'Home'
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
  store,
  render: h => h(App)
})
