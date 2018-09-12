/**
 * vue 配置
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import './style/element-variables.scss'

//此部分引入的是我们所编写的mockjs文档

Vue.prototype.$axios = axios;
Vue.use(ElementUI, {locale});
Vue.config.productionTip = false;
require('./mock');


/**
 *  监听路由
 *  修改网站title的值
 */
router.afterEach((transition) => {
  if (transition.meta.title) {
    document.title = transition.meta.title;
    console.log(`===>title`,transition.meta.title)
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: {App},
  template: '<App/>'
})
