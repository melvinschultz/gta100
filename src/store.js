import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentUser: null,
  userTheme: null
}

const mutations = {
  SET_USER (state, user) {
    state.currentUser = user
  },
  SET_USER_THEME (state, theme) {
    state.userTheme = theme
  }
}

const actions = {
  setUser ({commit}, user) {
    commit('SET_USER', user)
  },
  setUserTheme ({commit}, theme) {
    commit('SET_USER_THEME', theme)
  }
}

const getters = {
  currentUser: state => state.currentUser,
  userTheme: state => state.userTheme
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
