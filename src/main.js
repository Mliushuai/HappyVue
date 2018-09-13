/**
 * vue 配置
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import '@/common/style/element-variables.scss'

Vue.prototype.$axios = axios;
Vue.use(ElementUI, {locale},router);
Vue.config.productionTip = false;
//引入mock
require('./mock');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: {App},
  template: '<App/>'
})
