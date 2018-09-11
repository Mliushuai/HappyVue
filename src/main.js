// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import './style/element-variables.scss'

//此部分引入的是我们所编写的mockjs文档
require('./mock')
Vue.prototype.$axios = axios;
Vue.use(ElementUI, {locale});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
