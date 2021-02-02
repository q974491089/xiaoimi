import Vue from 'vue'
import Vuex from 'vuex'
// import a1 from './add'
Vue.use(Vuex)

// const v1 = {
//   state: () => {
//     count: 5
//   },
// }

export default new Vuex.Store({
  state: {
    count: 5
  },
  getters: {
    isShow: (state) => {
      return state.count + 2
    }
  },
  mutations: {
    add(state, index) {
      state.count += index;
    }
  },
  actions: {
    reduce(add, index) {
      add.commit('add', index);
    }
  },
  /*  modules: {
     add: a1,
   } */
})