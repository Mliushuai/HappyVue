import Vue from 'vue'
import VueRouter from 'vue-router'
import homeindex from '@/components/page/HomeIndex'
import aboutus from '@/components/page/AboutUs'
import setstate from '@/components/page/SetStating'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/homeindex',
      name: 'homeindex',
      component: homeindex
    }, {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    }
  ]
})
