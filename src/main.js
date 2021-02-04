import Vue from 'vue'
import App from './App.vue'
import './assets/font_k2eh6lzy7v/iconfont.css'
import '../public/font_ff7wloml1g7/iconfont.css'
import '../public/font_ff7wloml1g7/iconfont'
// import Header from './components/header/Herder.vue'
// import '@/styles/index.scss'
Vue.config.productionTip = false

import {
  Toast,
  Loading
} from 'vant';

import store from './store'

Vue.use(Toast);
Vue.use(Loading);

new Vue({
  store,
  render: h => h(App)
  /* components: {
    Header
  } */
}).$mount('#app')