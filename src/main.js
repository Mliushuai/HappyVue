/**
 * vue 配置
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import '@/common/style/element-variables.scss'

Vue.prototype.$axios = axios;
Vue.use(Vuex);
Vue.use(router)
Vue.use(ElementUI, {locale});
Vue.config.productionTip = false;
//引入mock
require('./mock');
let store = new Vuex.Store({
  state: {
    totalPrice: 0
  },
  mutations: {
    increment(state, price) {
      state.totalPrice += price
    },
    decrement(state, price) {
      state.totalPrice -= price
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: {App},
  template: '<App/>'
})
