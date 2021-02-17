import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state'
// import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// const v1 = {
//   state: () => {
//     count: 5
//   },
// }

export default new Vuex.Store({
    state,
    // getters,
    mutations,
    actions,
    /*  modules: {
       add: v1,
     } */
})