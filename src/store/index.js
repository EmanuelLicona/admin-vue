import { createStore } from 'vuex'

export default createStore({
  state: {
    app: {
      name: 'Vue AdminLTE',
    }
  },
  getters: {
    nameApp (state) {
      return state.app.name
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
